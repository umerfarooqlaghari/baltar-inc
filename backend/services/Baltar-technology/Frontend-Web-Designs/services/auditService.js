const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.runAuditService = (url) => {
  return new Promise((resolve, reject) => {
    if (!url || !url.startsWith('http')) {
      return reject(new Error('Valid URL is required'));
    }

    const fileName = `audit-${Date.now()}.report.json`;
    const filePath = path.join(__dirname, '..', 'temp', fileName);

    exec(`lighthouse ${url} --output=json --output-path=${filePath} --chrome-flags="--headless"`, (err) => {
      if (err) return reject(new Error('Audit failed to run'));

      const report = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      fs.unlinkSync(filePath);

      resolve({
        url,
        scores: {
          performance: report.categories.performance.score,
          accessibility: report.categories.accessibility.score,
          seo: report.categories.seo.score
        }
      });
    });
  });
};
