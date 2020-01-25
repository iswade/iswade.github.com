package main

import (
	"flag"
	"html/template"
	"log"
	"net/http"
	"strconv"
)

var ip = flag.String("ip", "127.0.0.1", "http service address")

//var port = flag.String("-port", "127.0.0.1", "http service address")
var port = flag.Int("port", 8080, "http service port")

var temp = template.Must(template.New("qr").Parse(templateStr))

func main() {
	flag.Parse()

	http.Handle("/", http.HandlerFunc(QR))

	addr := (*ip) + ":" + strconv.Itoa(*port)

	err := http.ListenAndServe(addr, nil)
	if err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}

func QR(w http.ResponseWriter, req *http.Request) {
	temp.Execute(w, req.FormValue("s"))
}

const templateStr = `
<html>
<head>
<title>QR Link Generator</title>
</head>
<body>

{{if .}}
<img src="http://chart.apis.google.com/chart?chs=300x300&cht=qr&choe=UTF-8&chl={{.}}" />
<br>
{{.}}
<br>
<br>
{{end}}

<form action="/" name=f method="GET"><input maxLength=1024 size=70
name=s value="" title="Text to QR Encode"><input type=submit
value="Show QR" name=qr>
</form>


</body>
</html>
`
