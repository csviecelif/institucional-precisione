const lighthouse = require("lighthouse")
const chromeLauncher = require("chrome-launcher")
const fs = require("fs")

const THRESHOLDS = {
  performance: 85,
  fcp: 2.0,
  lcp: 3.0,
  cls: 0.1,
  tbt: 300
}

async function runPerformanceTest() {
  console.log("🧪 Iniciando testes de performance...")
  
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] })
  
  const pages = [
    "http://localhost:3000/",
    "http://localhost:3000/busca-ativos",
    "http://localhost:3000/due-diligence"
  ]
  
  const results = []
  
  for (const url of pages) {
    console.log(`🔍 Testando: ${url}`)
    
    const { lhr } = await lighthouse(url, {
      port: chrome.port,
      onlyCategories: ["performance"]
    })
    
    const metrics = {
      url,
      performance: Math.round(lhr.categories.performance.score * 100),
      fcp: parseFloat(lhr.audits["first-contentful-paint"].numericValue / 1000),
      lcp: parseFloat(lhr.audits["largest-contentful-paint"].numericValue / 1000),
      cls: parseFloat(lhr.audits["cumulative-layout-shift"].numericValue),
      tbt: parseFloat(lhr.audits["total-blocking-time"].numericValue)
    }
    
    results.push(metrics)
    
    const passed = {
      performance: metrics.performance >= THRESHOLDS.performance,
      fcp: metrics.fcp <= THRESHOLDS.fcp,
      lcp: metrics.lcp <= THRESHOLDS.lcp,
      cls: metrics.cls <= THRESHOLDS.cls,
      tbt: metrics.tbt <= THRESHOLDS.tbt
    }
    
    console.log("📊 Resultados:", metrics)
    console.log("✅ Status:", passed)
    console.log("---")
  }
  
  await chrome.kill()
  
  fs.writeFileSync(
    `performance-results-${Date.now()}.json`,
    JSON.stringify(results, null, 2)
  )
  
  return results
}

runPerformanceTest().catch(console.error)
