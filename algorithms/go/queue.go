package algorithms

type Queue struct {
	head  *Node
	end   *Node
	count int
}

func NewQueue() *Queue {
	q := &Queue{nil, nil, 0}
	return q
}

func (q *Queue) Enqueue(data interface{}) {
	n := &Node{data, nil}

	if q.end == nil {
		q.head = n
		q.end = n
	} else {
		q.end.next = n
		q.end = n
	}

	q.count++
	return
}

func (q *Queue) Dequeue() (data interface{}, exist bool) {
	if q.head == nil {
		return nil, false
	}

	data = q.head.data
	q.head = q.head.next
	if q.head == nil {
		q.end = nil
	}

	q.count--
	return data, true
}

func (q *Queue) Count() int {
	return q.count
}

func (q *Queue) IsEmpty() bool {
	return q.count == 0
}
