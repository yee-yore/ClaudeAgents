# ClaudeAgents
Leveraging the Claude's 'projects' feature for pentesting and bughunting

## 1. Dorking
**Summary**

This project automates Google Dorking using the Serper MCP server. It enables efficient discovery of information disclosure vulnerabilities across target domains.

**Requirements**

Integration with Serper MCP server https://smithery.ai/server/@marcopesani/mcp-server-serper

**Basic Usage**

  1.	In your Claude project, create a project.
	
  2.	Upload and paste the following files into the folder:

`project_instruction`, `google_dorking_report_template_en.html`, `google_dorks_info_disclosure_en.txt`
	
  3.	When prompted, enter the target domain (e.g., example.com) for Google Dorking.
	
  4.	Your claude will perform automated Google Dorking using the pre-defined dorks and generate a structured report.

**Future Extensions**

  1. Customizing Serper API Parameters: the number of search results, date range

  2. Integrating Other Search Engines: DuckDuckGo, Bing

## 2. Javascript Analysis
**Summary**

This project automates Javascript Analysis using the Burp Suite MCP server. It enables efficient javascript analysis (a.k.a. JS recon).

**Requirements**

Integration with Burp Suite MCP server https://github.com/PortSwigger/mcp-server

**Basic Usage**

  1.	In your Claude project, create a project.
	
  2.	Upload and paste the following files into the folder:

`project_instruction`, `js_analysis_report_template_en.html`
	
  3.	When prompted, enter the target domain(e.g., example.com) or HTTP request traffic.
	
  4.	Your claude will perform automated Javascript Analysis and generate a structured report.

**Future Extensions**

  1. Customizing `project_instruction` (add what you wanna find in js files) 

  2. Vulnerability verification using Burp Suite MCP or Crawling MCP (prototype pollution, DOM-based XSS, etc)

  3. Integrating Trufflehog https://github.com/trufflesecurity/trufflehog

