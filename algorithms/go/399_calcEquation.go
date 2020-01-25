package algorithms

type unionNode struct {
	value  float64
	parent *unionNode
}

var m map[string]*unionNode

func unionFind(n *unionNode) *unionNode {
	if n.parent != n {
		n.parent = unionFind(n.parent)
	}
	return n.parent
}

func unionMerge(n1, n2 *unionNode, val float64) {
	p1 := unionFind(n1)
	p2 := unionFind(n2)
	ratio := n2.value / n1.value
	for _, v := range m {
		if unionFind(v) == p1 {
			v.value *= ratio
		}
	}
	p1.parent = p2
}

func calcEquation(equations [][]string, values []float64, queries [][]string) []float64 {
	m = make(map[string]*unionNode)
	for i := 0; i < len(equations); i++ {
		a := equations[i][0]
		b := equations[i][1]
		if _, ok := m[a]; !ok {
			node := &unionNode{value: values[i]}
			node.parent = node
			m[a] = node
		}
		if _, ok := m[b]; !ok {
			node := &unionNode{value: 1.0}
			node.parent = node
			m[b] = node
		}
		unionMerge(m[a], m[b], values[i])
	}

	var res []float64
	for _, q := range queries {
		if _, ok := m[q[0]]; !ok {
			res = append(res, -1)
		} else if _, ok := m[q[1]]; !ok {
			res = append(res, -1)
		} else if unionFind(m[q[0]]) != unionFind(m[q[1]]) {
			res = append(res, -1)
		} else {
			res = append(res, m[q[0]].value/m[q[1]].value)
		}
	}
	return res
}
