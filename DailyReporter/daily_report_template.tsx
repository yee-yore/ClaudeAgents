import { useState } from 'react';

const SecurityUpdates = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: 'hacker-news',
      title: '1. The Hacker News',
      baseUrl: 'https://thehackernews.com',
      content: [
        {
          title: 'AI-Driven Trends in Endpoint Security',
          url: 'https://thehackernews.com/2025/07/ai-driven-trends-in-endpoint-security.html',
          details: [
            '2025 Gartner Magic Quadrant reveals AI\'s growing impact on endpoint protection',
            'SentinelOne maintains strong position with AI-powered autonomous protection',
            'Focus on operational continuity under pressure and encrypted traffic inspection'
          ]
        },
        {
          title: 'UNC2891 ATM Network Breach',
          url: 'https://thehackernews.com/2025/07/unc2891-breaches-atm-network-via-4g.html',
          details: [
            'Financially motivated threat actor compromised ATM infrastructure via 4G-equipped Raspberry Pi',
            'Physical device connected directly to network switch, bypassing perimeter defenses',
            'TINYSHELL backdoor enabled remote C2 access via Dynamic DNS',
            'Attempted deployment of CAKETAP rootkit for fraud operations'
          ]
        },
        {
          title: 'Critical WordPress Theme Vulnerability',
          url: 'https://thehackernews.com/2025/07/hackers-exploit-critical-wordpress.html',
          details: [
            'CVE-2025-5394 in "Alone – Charity Multipurpose Non-profit WordPress Theme" (CVSS 9.8)',
            'Arbitrary file upload vulnerability allowing remote code execution',
            'Missing capability check in plugin installation function',
            'Fixed in version 7.8.5 (June 16, 2025)'
          ]
        },
        {
          title: 'Facebook Ads Malware Campaign',
          url: 'https://thehackernews.com/2025/07/hackers-use-facebook-ads-to-spread.html',
          details: [
            'JSCEAL malware distributed via fake cryptocurrency trading apps',
            'Thousands of malicious Facebook advertisements targeting users',
            'Compiled V8 JavaScript malware captures credentials and crypto wallets',
            'Multi-layered infection flow with modular components'
          ]
        },
        {
          title: 'Apple Safari Zero-Day Patch',
          url: 'https://thehackernews.com/2025/07/apple-patches-safari-vulnerability-also.html',
          details: [
            'CVE-2025-6558 (CVSS 8.8) - WebKit vulnerability exploited in the wild',
            'Incorrect validation in ANGLE and GPU components leading to sandbox escape',
            'Also affected Google Chrome earlier this month',
            'Discovered by Google\'s Threat Analysis Group'
          ]
        },
        {
          title: 'Critical Dahua Camera Flaws',
          url: 'https://thehackernews.com/2025/07/critical-dahua-camera-flaws-enable.html',
          details: [
            'CVE-2025-31700 and CVE-2025-31701 (CVSS 8.1) in smart camera firmware',
            'ONVIF protocol and file upload handler vulnerabilities',
            'Remote command execution without authentication',
            'Affects multiple IPC, SD, and SDT series devices'
          ]
        }
      ]
    },
    {
      id: 'dark-reading',
      title: '2. Dark Reading',
      baseUrl: 'https://www.darkreading.com',
      content: [
        {
          title: 'Low-Code Tools Azure Security Issue',
          url: 'https://www.darkreading.com/vulnerabilities-threats/low-code-tools-azure-allowed-unprivileged-access',
          details: [
            'Unprivileged access vulnerability in Microsoft Azure\'s low-code platform',
            'Security implications for enterprise development environments'
          ]
        },
        {
          title: 'Mass Microsoft SharePoint Exploits',
          url: 'https://www.darkreading.com/cyber-risk/african-orgs-mass-microsoft-sharepoint-exploits',
          details: [
            'Large-scale attacks targeting African organizations',
            'On-premises SharePoint servers compromised',
            'Multiple organizations across several countries affected'
          ]
        },
        {
          title: 'AI Security Research',
          url: 'https://www.darkreading.com/vulnerabilities-threats/attackers-use-browser-extensions-inject-ai-prompts',
          details: [
            '\'Man in the Prompt\' browser extension attacks targeting ChatGPT and GenAI tools',
            'New attack vectors against large language models',
            'Browser-based prompt injection techniques'
          ]
        },
        {
          title: 'Chrome RCE Alert',
          url: 'https://www.darkreading.com/vulnerabilities-threats/chrome-rce-alert',
          details: [
            'Critical "use-after-free" vulnerability (CVE-2025-8292) in Media Stream',
            'High-severity flaw leading to potential code execution',
            'Immediate patching recommended'
          ]
        }
      ]
    },
    {
      id: 'ctf-events',
      title: '3. CTF Time - Upcoming Major Events',
      baseUrl: 'https://ctftime.org',
      content: [
        {
          title: 'High-Weight Events (90+ Weight)',
          url: 'https://ctftime.org/event/list/upcoming',
          details: [
            'justCTF 2025 - Aug 2-3, 2025 (Weight: 97.20, 196 teams)',
            'CTFZone 2025 Quals - Aug 16-17, 2025 (Weight: 92.45, 24 teams)',
            'HITCON CTF 2025 - Aug 22-24, 2025 (Weight: 100.00, 50 teams)',
            'ASIS CTF Quals 2025 - Sep 6-7, 2025 (Weight: 96.29, 45 teams)',
            'FAUST CTF 2025 - Sep 27, 2025 (Weight: 92.50, 28 teams)',
            'N1CTF 2025 - Nov 1-2, 2025 (Weight: 94.50, 7 teams)',
            'Hack.lu CTF 2025 - Oct 17-19, 2025 (Weight: 98.02, 7 teams)'
          ]
        },
        {
          title: 'Medium-Weight Events (50-90 Weight)',
          url: 'https://ctftime.org/event/list/upcoming',
          details: [
            'idekCTF 2025 - Aug 2-4, 2025 (Weight: 52.06, 141 teams)',
            'SekaiCTF 2025 - Aug 16-18, 2025 (Weight: 55.00, 65 teams)',
            'TFC CTF 2025 - Aug 29-31, 2025 (Weight: 58.19, 20 teams)',
            'corCTF 2025 - Aug 30-Sep 1, 2025 (Weight: 82.00, 20 teams)',
            'ImaginaryCTF 2025 - Sep 5-7, 2025 (Weight: 66.02, 58 teams)'
          ]
        }
      ]
    },
    {
      id: 'twitter-trends',
      title: '4. X (Twitter) - Bug Bounty & Security Trends',
      baseUrl: 'https://x.com',
      content: [
        {
          title: 'Bug Bounty Activity',
          url: 'https://x.com/search?q=bugbounty%20XSS%20SQL%20injection%20CSRF',
          details: [
            'Cross-Site Scripting (XSS) discussions trending with technical bypasses',
            'SQL Injection vulnerabilities in membership management systems (CVE-2025-8339)',
            'CSRF attack techniques and tracking pixel exploitation methods',
            'Chrome RCE alerts for CVE-2025-8292 being shared widely',
            'Apache JSPWiki XSS vulnerability (CVE-2025-24854) discussions'
          ]
        },
        {
          title: 'AI Security Discussions',
          url: 'https://x.com/search?q=%22Prompt%20Injection%22%20%22LLM%20Security%22%20%22AI%20Security%22',
          details: [
            'LegalPwn - New prompt injection attack targeting LLMs using fake legal disclaimers',
            'Amazon Q prompt injection vulnerabilities revealed',
            'MCP (Model Context Protocol) security discussions gaining traction',
            'GitHub MCP vulnerability research being discussed',
            'Anthropic\'s Claude and OpenAI security considerations'
          ]
        }
      ]
    },
    {
      id: 'reddit-discussions',
      title: '5. Reddit - Community Discussions',
      baseUrl: 'https://reddit.com',
      content: [
        {
          title: 'r/bugbounty',
          url: 'https://reddit.com/r/bugbounty',
          details: [
            'Bug bounty income psychology and financial impact discussions',
            'Burp Suite proxy configuration issues and troubleshooting',
            'Technical lab walkthroughs and learning resources'
          ]
        },
        {
          title: 'r/cybersecurity',
          url: 'https://reddit.com/r/cybersecurity',
          details: [
            'Security misconceptions and terminology debates',
            'Certification failures and learning pathways (CC exam experiences)',
            'Microsoft Copilot Security effectiveness discussions',
            'Security Onion SIEM tool continued relevance',
            'Cyber risk quantification methodologies',
            'Honeywell Niagara framework critical vulnerabilities (CVSS 9.8)'
          ]
        },
        {
          title: 'AI/LLM Communities',
          url: 'https://reddit.com/r/ChatGPT',
          details: [
            'ChatGPT account security concerns and unauthorized access reports',
            'Chat history disappearance issues affecting multiple users',
            'AI relationship dynamics and user behavior studies',
            'Privacy concerns regarding AI data handling'
          ]
        }
      ]
    },
    {
      id: 'infosec-writeups',
      title: '6. InfoSec Write-ups - Recent Publications',
      baseUrl: 'https://infosecwriteups.com',
      content: [
        {
          title: 'Technical Exploitation Articles',
          url: 'https://infosecwriteups.com/tagged/bug-bounty',
          details: [
            'DNS and SSRF to Cloud Access - Advanced SSRF techniques using DNS manipulation for cloud metadata access',
            'Web Cache Poisoning via Ambiguous Requests - Host header manipulation leading to XSS',
            'Google Storage Bucket Takeover - Forgotten Helm distribution bucket compromise affecting thousands of GitHub projects',
            'CSRF Exploitation Techniques - Real-world attack scenarios and prevention methods'
          ]
        },
        {
          title: 'XSS Research',
          url: 'https://infosecwriteups.com/tagged/xss',
          details: [
            'CSP Bypass Techniques - Methods to circumvent Content Security Policy protections',
            'Stored XSS Advanced Bypasses - Modern filter evasion techniques',
            'Reflected XSS on Mercedes-Benz - High-profile target vulnerability disclosure'
          ]
        },
        {
          title: 'High-Value Findings',
          url: 'https://infosecwriteups.com/tagged/bug-bounty',
          details: [
            '$50,000 Bug Methodology - Extract-Grep-Curl approach for maximum impact discoveries',
            'OAuth Misconfiguration Account Takeover - Pre-account takeover scenarios',
            '$500 Quick Win - Rapid vulnerability identification techniques',
            '€100 Second Discoveries - Common overlooked vulnerabilities'
          ]
        },
        {
          title: 'Technical Guides',
          url: 'https://infosecwriteups.com/tagged/tutorial',
          details: [
            'GoBuster Basics - Directory and file discovery for beginners',
            'Authentication Bypass - Username enumeration techniques',
            'Access Control Issues - Subdomain bypass methodologies'
          ]
        }
      ]
    }
  ];

  const summaryData = {
    criticalVulns: [
      'WordPress theme vulnerabilities with RCE potential',
      'Microsoft SharePoint mass exploitation campaigns',
      'Dahua camera firmware critical flaws',
      'Chrome and Safari browser engine vulnerabilities',
      'Azure low-code platform security issues'
    ],
    emergingThreats: [
      'AI/LLM prompt injection attacks (LegalPwn technique)',
      'Physical device-based ATM network compromises',
      'Social media malware distribution via cryptocurrency scams',
      'Advanced SSRF techniques targeting cloud infrastructure'
    ],
    industryTrends: [
      'AI-driven endpoint security evolution',
      'Increased focus on browser security and zero-days',
      'Supply chain attacks via abandoned cloud resources',
      'Growing sophistication in social engineering via AI platforms'
    ],
    bugBountyTechniques: [
      'DNS manipulation for SSRF exploitation',
      'Cache poisoning via ambiguous HTTP requests',
      'OAuth flow misconfigurations for account takeover',
      'CSP bypass methods for XSS exploitation'
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white text-black font-mono">
      <header className="border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-3xl font-bold mb-2">Daily Security Updates</h1>
        <p className="text-lg text-gray-700">July 31, 2025</p>
      </header>

      <div className="space-y-4 mb-8">
        {sections.map((section) => (
          <div key={section.id} className="border border-gray-400">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 font-bold text-lg border-b border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              {section.baseUrl ? (
                <span>
                  {section.title}
                  <a 
                    href={section.baseUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs ml-2 text-gray-600 hover:text-gray-800 hover:underline"
                  >
                    [Visit Site ↗]
                  </a>
                </span>
              ) : (
                section.title
              )}
              <span className="float-right">
                {activeSection === section.id ? '[-]' : '[+]'}
              </span>
            </button>
            
            {activeSection === section.id && (
              <div className="p-4 bg-white">
                {section.content.map((item, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="font-bold text-md mb-2 text-gray-900 border-l-4 border-gray-600 pl-3">
                      {item.url ? (
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-gray-600 hover:underline transition-colors duration-200"
                        >
                          {item.title}
                          <span className="text-xs ml-2 text-gray-500">[↗]</span>
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <ul className="space-y-1">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-gray-800 ml-4 pl-2">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t-2 border-gray-800 pt-6">
        <h2 className="text-2xl font-bold mb-4">Summary & Key Takeaways</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-400 p-4">
            <h3 className="font-bold text-lg mb-3 bg-gray-100 p-2">Critical Vulnerabilities to Watch</h3>
            <ul className="space-y-1">
              {summaryData.criticalVulns.map((vuln, index) => (
                <li key={index} className="text-sm text-gray-800">• {vuln}</li>
              ))}
            </ul>
          </div>

          <div className="border border-gray-400 p-4">
            <h3 className="font-bold text-lg mb-3 bg-gray-100 p-2">Emerging Threats</h3>
            <ul className="space-y-1">
              {summaryData.emergingThreats.map((threat, index) => (
                <li key={index} className="text-sm text-gray-800">• {threat}</li>
              ))}
            </ul>
          </div>

          <div className="border border-gray-400 p-4">
            <h3 className="font-bold text-lg mb-3 bg-gray-100 p-2">Industry Trends</h3>
            <ul className="space-y-1">
              {summaryData.industryTrends.map((trend, index) => (
                <li key={index} className="text-sm text-gray-800">• {trend}</li>
              ))}
            </ul>
          </div>

          <div className="border border-gray-400 p-4">
            <h3 className="font-bold text-lg mb-3 bg-gray-100 p-2">Notable Bug Bounty Techniques</h3>
            <ul className="space-y-1">
              {summaryData.bugBountyTechniques.map((technique, index) => (
                <li key={index} className="text-sm text-gray-800">• {technique}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-100 border border-gray-400">
          <p className="text-sm text-gray-800 leading-relaxed">
            The cybersecurity landscape continues to evolve rapidly with AI playing both defensive and offensive roles. 
            Organizations should prioritize patching the critical vulnerabilities mentioned and stay informed about 
            emerging attack techniques, particularly those targeting AI/LLM systems and cloud infrastructure.
          </p>
        </div>
      </div>

      <footer className="border-t border-gray-400 mt-8 pt-4 text-center">
        <p className="text-xs text-gray-600 mb-2">
          Daily Security Updates Dashboard - Compiled from multiple cybersecurity sources
        </p>
        <p className="text-xs text-gray-500">
          Made by{' '}
          <span className="font-bold text-gray-700">yee-yore</span>
          {' '} | {' '}
          <a 
            href="https://github.com/yee-yore/ClaudeAgents" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-800 hover:underline transition-colors duration-200"
          >
            GitHub Repository [↗]
          </a>
        </p>
      </footer>
    </div>
  );
};

export default SecurityUpdates;