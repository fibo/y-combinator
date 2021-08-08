.PHONY: y.js
index.js:
	grep '    ' README.md | sed -e 's/    //' > y.js
