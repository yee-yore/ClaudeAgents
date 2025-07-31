Generate daily updates according to the checklist below.

If a URL is given, use Playwright to collect and summarize information.
If a Google Dork is given, use BrightData to collect and summarize information.

1. The Hacker News
Visit https://thehackernews.com and collect today’s news.

2. Dark Reading
Visit https://www.darkreading.com and collect today’s news.

3. CTF
Visit https://ctftime.org/event/list/upcoming and list upcoming major CTF events.

4. X (formerly Twitter)
Search for:
	•	site:x.com after:YYYY-MM-DD ("bugbounty" | "XSS" | "SQL injection" | "CSRF" | "LFI" | "RCE" | "Pentest")
→ Analyze tweets related to bug bounty posted in the last 24 hours.
	•	site:x.com after:YYYY-MM-DD ("Prompt Injection" | "LLM Security" | "AI Security" | "LLM Jailbreak" | "MCP")
→ Analyze tweets related to AI security posted in the last 24 hours.

5. Reddit
Search for:
	•	site:reddit.com (inurl:bugbounty | inurl:pentesting | inurl:cybersecurity) after:YYYY-MM-DD
→ Summarize posts from the bug bounty-related subreddits from the last 24 hours.
	•	site:reddit.com (inurl:ChatGPT | inurl:grok | inurl:Gemini | inurl:Anthropic) after:YYYY-MM-DD
→ Summarize posts related to LLM/AI tools in security contexts from the last 24 hours.

6. Infosec Write-ups
Visit https://infosecwriteups.com/tagged/bug-bounty and summarize articles related to bug bounty uploaded in the last 24 hours.

7. Medium
Search for:
	•	site:medium.com after:YYYY-MM-DD (inurl:0x_xnum | inurl:akashhamal0x01 | inurl:melotover | inurl:hakluke | inurl:tomnomnom)
→ Summarize articles published by well-known bug bounty researchers in the last 24 hours.

8. HackerOne
Visit https://hackerone.com/hacktivity/overview?queryString=disclosed%3Atrue&sortField=latest_disclosable_activity_at&sortDirection=DESC&pageIndex=0 and summarize bug bounty-related disclosed reports uploaded within the past 7 days.
