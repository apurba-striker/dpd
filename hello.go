package main

import (
	"fmt"
	"sort"
)

type Event struct {
	time      int
	eventType string
}

func getMaxTrafficTime(start []int, end []int) int {
	events := make([]Event, 0, len(start)*2)

	// Create list of events
	for i := 0; i < len(start); i++ {
		events = append(events, Event{start[i], "start"})
		events = append(events, Event{end[i], "end"})
	}

	sort.Slice(events, func(i, j int) bool {
		if events[i].time == events[j].time {
			return events[i].eventType < events[j].eventType
		}
		return events[i].time < events[j].time
	})

	maxInteractions := 0
	currentInteractions := 0
	earliestTime := int(^uint(0) >> 1) 


	for _, event := range events {
		if event.eventType == "start" {
			currentInteractions++
		} else {
			currentInteractions--
		}

		if currentInteractions > maxInteractions {
			maxInteractions = currentInteractions
			earliestTime = event.time
		}
	}

	return earliestTime
}

func main() {
	start := []int{2, 3, 7, 4, 7}
	end := []int{4, 5, 8, 7, 10}

	fmt.Println(getMaxTrafficTime(start, end)) // Output: 4
}