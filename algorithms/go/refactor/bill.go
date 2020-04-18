package refactor

import (
	"errors"
	"math"
	"strconv"
)

type Play struct {
	Name string `json:"name"`
	Type string `json:"type"`
}

type Plays map[string]Play

type Performance struct {
	PlayID   string `json:"playID"`
	Audience int    `json:"audience"`
}

type Invoice struct {
	Customer     string        `json:"customer"`
	Performances []Performance `json:"performances"`
}

func statement(invoice Invoice, plays Plays) (string, error) {
	totalAmount := 0
	volumeCredits := 0
	result := "Statement for " + invoice.Customer + "\n"

	for _, perf := range invoice.Performances {
		play := plays[perf.PlayID]
		thisAmount, err := amountFor(play, perf)
		if err != nil {
			return "", err
		}
		// add volume credits
		volumeCredits += int(math.Max(float64(perf.Audience-30), 0))
		// add extra credit for every ten comedy attendees
		if "comedy" == play.Type {
			volumeCredits += int(math.Floor(float64(perf.Audience) / 5))
		}
		// print line for this order
		result += "  " + play.Name + ": $" + strconv.FormatFloat(float64(thisAmount)/100, 'f', 2, 64) +
			" (" + strconv.Itoa(perf.Audience) + " seats)\n"
		totalAmount += thisAmount
	}

	result += "Amount owed is " + "$" + strconv.FormatFloat(float64(totalAmount)/100, 'f', 2, 64) + "\n"
	result += "You earned " + strconv.Itoa(volumeCredits) + " credits\n"
	return result, nil
}

func amountFor(play Play, perf Performance) (int, error) {
	result := 0
	switch play.Type {
	case "tragedy":
		result = 40000
		if perf.Audience > 30 {
			result += 1000 * (perf.Audience - 30)
		}
	case "comedy":
		result = 30000
		if perf.Audience > 20 {
			result += 10000 + 500*(perf.Audience-20)
		}
		result += 300 * perf.Audience
	default:
		return 0, errors.New("unknown type: " + play.Type)
	}
	return result, nil
}
