package main

import (
	"fmt"
	"io"
	"log"
	"net"
	"os"
)

func Server() {
	// Listen on TCP port 2000 on all available unicast and
	// anycast IP addresses of the local system.
	l, err := net.Listen("tcp", ":2000")
	if err != nil {
		log.Fatal(err)
	}
	defer l.Close()
	for {
		// Wait for a connection.
		conn, err := l.Accept()
		if err != nil {
			log.Fatal(err)
		}
		// Handle the connection in a new goroutine.
		// The loop then returns to accepting, so that
		// multiple connections may be served concurrently.
		go func(c net.Conn) {
			// Echo all incoming data.
			io.Copy(c, c)
			// Shut down the connection.
			c.Close()
		}(conn)
	}
}

func Client() {
	conn, err := net.Dial("tcp", "127.0.0.1:2000")
	if err != nil {
		log.Fatal(err)
	}

	defer conn.Close()

	go mustCopy(os.Stdout, conn)

	mustCopy(conn, os.Stdin)
}

func mustCopy(dst io.Writer, src io.Reader) {
	if _, err := io.Copy(dst, src); err != nil {
		log.Fatal(err)
	}
}

func help() {
	fmt.Println("usage:")
	fmt.Println(" ./echo server    start server")
	fmt.Println(" ./echo client    start client")
}

func main()  {

	if len(os.Args) == 1 {
		help()
	} else if os.Args[1] == "server" {
		Server()
	} else if os.Args[1] == "client" {
		Client()
	} else {
		help()
	}
}
