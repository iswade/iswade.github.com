package algorithms

type Node struct {
	data interface{}
	next *Node
}

type Stack struct {
	head  *Node
	count int
}

func NewStack() *Stack {
	s := &Stack{nil, 0}
	return s
}

func (s *Stack) Push(data interface{}) {
	n := &Node{data, nil}
	if s.head == nil {
		s.head = n
	} else {
		n.next = s.head
		s.head = n
	}
	s.count++
}

func (s *Stack) Pop() (data interface{}, exist bool) {
	if s.head == nil {
		return nil, false
	}

	data = s.head.data
	s.head = s.head.next

	s.count--
	return data, true
}
