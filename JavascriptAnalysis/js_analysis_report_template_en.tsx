import React, { useState } from 'react';

const JavaScriptAnalysisReportEN = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'codeAnalysis', title: 'JavaScript Code Analysis' },
    { id: 'security', title: 'Security Analysis' },
    { id: 'endpoints', title: 'API Endpoints' },
    { id: 'vulnerabilities', title: 'Vulnerability Analysis' },
    { id: 'recommendations', title: 'Recommendations' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  const jsFiles = [
    {
      name: 'jindo.js',
      type: 'Library',
      description: 'Custom JavaScript Framework',
      size: 'Minified Code',
      priority: 'Low',
      securityImpact: 'Browser Compatibility Handling'
    },
    {
      name: 'web_test_service.FqXIUi0k.js',
      type: 'Main Application',
      description: 'React-based Test Service Bundle',
      size: 'Very Large File (Minified)',
      priority: 'High',
      securityImpact: 'Contains Core Business Logic'
    },
    {
      name: 'clog.js',
      type: 'Logging Module',
      description: 'Client-side Error Logging',
      size: 'Small',
      priority: 'Medium',
      securityImpact: 'Error Information Collection'
    }
  ];

  const inlineScripts = [
    {
      location: 'index.html head',
      content: 'User Information and Environment Configuration',
      variables: ['USER_ID', 'USER_NAME', 'USER_NICKNAME', 'TEST_WEB_URL', 'TEST_MOBILE_URL'],
      securityLevel: 'High'
    },
    {
      location: 'index.html body',
      content: 'GNB Initialization and Environment Setup',
      variables: ['****.deskhome_menu', 'getGNB'],
      securityLevel: 'Medium'
    }
  ];

  const securityFindings = [
    {
      type: 'User Information Exposure',
      severity: 'Medium',
      description: 'User information exposed through global variables in inline scripts',
      code: 'window.USER_ID = \'*****\';\nwindow.USER_NAME = \'*****\';\nwindow.USER_NICKNAME = \'****\';'
    },
    {
      type: 'Error Information Collection',
      severity: 'Low',
      description: 'Logic that sends client errors to server',
      code: 'sendClientErrorLog({\n  userAgent: navigator.userAgent,\n  message: msg,\n  pageUrl: window.location.href\n});'
    },
    {
      type: 'Environment Information Exposure',
      severity: 'Low',
      description: 'Application environment information exposed globally',
      code: 'window.TEST_ENV = \'real\'\nwindow.****_APP = /.*****.*inapp.*/.test(...)'
    }
  ];

  const apiEndpoints = [
    '/monitor/client/error - POST (Error Logging)',
    'Test CRUD related APIs (included in bundle)',
    'User Authentication related APIs (included in bundle)',
    'File Upload related APIs (included in bundle)'
  ];

  const vulnerabilities = [
    {
      category: 'Information Disclosure',
      severity: 'Medium',
      items: [
        'User information exposed through global JavaScript variables',
        'Environment configuration accessible from client-side',
        'Internal URL structure exposure'
      ]
    },
    {
      category: 'Client-side Security',
      severity: 'Low',
      items: [
        'Reverse engineering difficult due to minified code',
        'Enhanced DOM manipulation security with React-based architecture',
        'Compliance with modern web standards'
      ]
    },
    {
      category: 'Logging and Monitoring',
      severity: 'Low',
      items: [
        'Client error information collection',
        'Potential user behavior tracking',
        'Debug information disabled in production environment'
      ]
    }
  ];

  const recommendations = [
    {
      category: 'Immediate Improvements',
      priority: 'High',
      items: [
        'Manage user information securely instead of global variables',
        'Send sensitive information from server only when necessary',
        'Minimize environment variables and consider encryption'
      ]
    },
    {
      category: 'Security Enhancement',
      priority: 'Medium',
      items: [
        'Implement CSP (Content Security Policy)',
        'Additional validation logic for XSS prevention',
        'Verify CSRF token implementation',
        'Use appropriate authentication headers for API requests'
      ]
    },
    {
      category: 'Code Quality Improvement',
      priority: 'Low',
      items: [
        'Remove Source Map from production environment',
        'Enhance removal of unnecessary console logs',
        'Optimize bundle size',
        'Gradually remove legacy code'
      ]
    }
  ];

  const getSeverityStyle = (severity) => {
    const base = 'px-2 py-1 text-xs font-medium rounded';
    switch (severity) {
      case 'High':
        return `${base} bg-gray-800 text-white`;
      case 'Medium':
        return `${base} bg-gray-600 text-white`;
      default:
        return `${base} bg-gray-400 text-white`;
    }
  };

  const renderOverview = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-2">Analysis Target</h3>
          <p className="text-gray-700">https://test.******.com/</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-2">Analysis Date</h3>
          <p className="text-gray-700">July 16, 2025</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-2">Service Type</h3>
          <p className="text-gray-700">****** Test Web Application</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-2">Main Tech Stack</h3>
          <p className="text-gray-700">React, Modern JavaScript ES6+</p>
        </div>
      </div>
    </div>
  );

  const renderCodeAnalysis = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Identified JavaScript Files</h3>
        <div className="space-y-4">
          {jsFiles.map((file, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{file.name}</h4>
                <div className="flex gap-2">
                  <span className="px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded">{file.type}</span>
                  <span className={getSeverityStyle(file.priority)}>
                    {file.priority}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{file.description}</p>
              <div className="text-xs text-gray-500">
                <span className="font-medium">Size:</span> {file.size} | 
                <span className="font-medium ml-2">Security Impact:</span> {file.securityImpact}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium text-gray-900 mb-3">Inline Script Analysis</h3>
        <div className="space-y-4">
          {inlineScripts.map((script, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{script.location}</h4>
                <span className={getSeverityStyle(script.securityLevel)}>
                  {script.securityLevel}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{script.content}</p>
              <div className="text-xs text-gray-500">
                <span className="font-medium">Exposed Variables:</span> {script.variables.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Hardcoded Secrets/API Keys</h3>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-gray-600">Result: Not Found</p>
          <p className="text-sm text-gray-500 mt-1">No hardcoded API keys or secret information found in analyzed JavaScript code</p>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-gray-900 mb-3">Sensitive Information Exposure</h3>
        <div className="space-y-4">
          {securityFindings.map((finding, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{finding.type}</h4>
                <span className={getSeverityStyle(finding.severity)}>{finding.severity}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{finding.description}</p>
              <pre className="bg-gray-800 text-gray-100 p-3 rounded text-xs overflow-x-auto">
                {finding.code}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEndpoints = () => (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h3 className="font-medium text-gray-900 mb-3">Identified API Endpoints</h3>
      <ul className="space-y-2">
        {apiEndpoints.map((endpoint, index) => (
          <li key={index} className="text-sm text-gray-700 border-l-2 border-gray-300 pl-3">
            {endpoint}
          </li>
        ))}
      </ul>
      <div className="mt-4 p-3 bg-gray-100 rounded">
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> The main application bundle is minified, limiting exact API endpoint extraction. 
          Additional investigation through network traffic analysis is recommended.
        </p>
      </div>
    </div>
  );

  const renderVulnerabilities = () => (
    <div className="space-y-6">
      {vulnerabilities.map((vuln, index) => (
        <div key={index}>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-medium text-gray-900">{vuln.category}</h3>
            <span className={getSeverityStyle(vuln.severity)}>{vuln.severity}</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <ul className="space-y-2">
              {vuln.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm text-gray-700 border-l-2 border-gray-400 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  const renderRecommendations = () => (
    <div className="space-y-6">
      {recommendations.map((rec, index) => (
        <div key={index}>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-medium text-gray-900">{rec.category}</h3>
            <span className={getSeverityStyle(rec.priority)}>{rec.priority}</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <ul className="space-y-2">
              {rec.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm text-gray-700 border-l-2 border-gray-400 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  const renderConclusion = () => (
    <div className="space-y-4">
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="font-medium text-gray-900 mb-3">Overall Assessment</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The JavaScript code of ****** Test generally adheres to modern web development standards and 
          uses a secure React-based architecture. The code is minified, making it difficult to 
          reverse engineer for attacks.
        </p>
        
        <h4 className="font-medium text-gray-900 mb-2">Key Security Strengths</h4>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
          <li>Secure DOM manipulation with React-based architecture</li>
          <li>Obfuscation effect through code minification</li>
          <li>Application of modern web standards and security headers</li>
          <li>Debug information disabled in production environment</li>
        </ul>

        <h4 className="font-medium text-gray-900 mb-2">Areas for Improvement</h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Minimize exposure of user information through global variables</li>
          <li>Improve client-side environment variable management</li>
          <li>Review implementation of additional security headers</li>
        </ul>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
        <h4 className="font-medium text-gray-900 mb-2">Overall Security Rating</h4>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-gray-600 text-white rounded font-medium">Medium</span>
          <span className="text-sm text-gray-700">
            Maintains good overall security level with some areas for improvement
          </span>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'codeAnalysis':
        return renderCodeAnalysis();
      case 'security':
        return renderSecurity();
      case 'endpoints':
        return renderEndpoints();
      case 'vulnerabilities':
        return renderVulnerabilities();
      case 'recommendations':
        return renderRecommendations();
      case 'conclusion':
        return renderConclusion();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8 pb-6 border-b border-gray-200">
          <h1 className="text-3xl font-light text-gray-900 mb-2">
            JavaScript Analysis Report
          </h1>
          <p className="text-gray-600">****** Test (test.******.com)</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <nav className="lg:w-64 flex-shrink-0">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
              <h2 className="font-medium text-gray-900 mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        activeSection === section.id
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <main className="flex-1">
            <div className="bg-white">
              <h2 className="text-2xl font-light text-gray-900 mb-6">
                {sections.find(s => s.id === activeSection)?.title}
              </h2>
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptAnalysisReportEN;