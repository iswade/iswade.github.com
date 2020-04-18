package refactor

import (
	"encoding/json"
	"io/ioutil"
	"testing"
)

func loadJson(file string, v interface{}) error {
	data, err := ioutil.ReadFile(file)
	if err != nil {
		return err
	}
	err = json.Unmarshal(data, v)
	if err != nil {
		return err
	}
	return nil
}

func Test_statement(t *testing.T) {
	var invoice Invoice
	err := loadJson("invoices.json", &invoice)
	if err != nil {
		t.Error(err)
	}

	var plays Plays
	err = loadJson("plays.json", &plays)
	if err != nil {
		t.Error(err)
	}

	want := `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1730.00
You earned 47 credits
`

	result, err := statement(invoice, plays)
	if err != nil {
		t.Error(err)
	}
	if result != want {
		t.Error("expected:", want, "result:", result)
	}
}

func Test_statementErrorPlayType(t *testing.T) {
	var invoice Invoice
	err := loadJson("invoices.json", &invoice)
	if err != nil {
		t.Error(err)
	}

	var plays Plays
	err = loadJson("plays.json", &plays)
	if err != nil {
		t.Error(err)
	}

	hamlet := plays["hamlet"]
	hamlet.Type = "unknown"
	plays["hamlet"] = hamlet
	result, err := statement(invoice, plays)
	if err == nil {
		t.Error(result)
	}
}
