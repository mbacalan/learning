package greetings

import (
  "fmt"
  "errors"
  "math/rand"
  "time"
)

// hello returns a greeting for the named person
func Hello(name string) (string, error) {
  if name == "" {
    return "", errors.New("empty name")
  }

  // return a greeting that embeds the name in a message
  message := fmt.Sprintf(randomFormat(), name)
  return message, nil
}

func Hellos(names []string) (map[string]string, error) {
  messages := make(map[string]string)

  for _, name := range names {
    message, err := Hello(name)
    if err != nil {
      return nil, err
    }

    messages[name] = message
  }

  return messages, nil
}

func init() {
  rand.Seed(time.Now().UnixNano())
}

func randomFormat() string {
  formats := []string{
    "hi, %v. welcome!",
    "great to see you, %v!",
    "hail %v! well met!",
  }


  return formats[rand.Intn(len(formats))]
}
