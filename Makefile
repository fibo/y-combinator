.PHONY: index.js
index.js:
	grep '    ' README.md | sed -e 's/    //' > index.js
