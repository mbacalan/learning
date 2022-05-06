package main

import (
  "fmt"
  "log"

  "example/greetings"
)

func main() {
  // set props of the predefined logger, including
  // the log entry prefix and a  flag to disable printing
  // the time, source file and ln number
  log.SetPrefix("greetings: ")
  log.SetFlags(0)

  names := []string{"anon", "user", "admin"}
  message, err := greetings.Hellos(names)

  // if anerr was returned, print it and exit
  if err != nil {
    log.Fatal(err)
  }

  fmt.Println(message)
}
