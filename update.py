import sys
import re

with open(r'd:\antigravity\portfolio renu\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Commissions CSS for contrast
content = re.sub(
    r'\/\*\s*====================== COMMISSIONS SECTION ======================\s*\*\/\s*\.section-commissions\s*\{\s*max-height:\s*0;\s*overflow:\s*hidden;\s*transition:\s*max-height\s*0\.6s\s*cubic-bezier\(\.4,\s*0,\s*\.2,\s*1\),\s*opacity\s*0\.4s\s*ease;\s*opacity:\s*0;\s*\}',
    '''/* ====================== COMMISSIONS SECTION ====================== */
    .section-commissions {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.6s cubic-bezier(.4, 0, .2, 1), opacity 0.4s ease;
      opacity: 0;
      background: var(--cyan-light);
      border-top: var(--border-w) solid var(--dark);
      color: var(--dark);
      position: relative;
    }''',
    content,
    flags=re.DOTALL
)

with open(r'd:\antigravity\portfolio renu\index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated commissions CSS successfully.")
