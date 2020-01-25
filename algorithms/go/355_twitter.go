package algorithms

type twitter struct {
	user int
	id   int
}

type User struct {
	id        int
	followers map[int]bool
}

type Twitter struct {
	users    map[int]*User
	twitters []twitter
}

func ConstructorTwitter() Twitter {
	return Twitter{make(map[int]*User), nil}
}

func (tw *Twitter) PostTweet(userId int, tweetId int) {
	u := tw.users[userId]
	if u == nil {
		tw.users[userId] = &User{userId, nil}
	}
	tw.twitters = append(tw.twitters, twitter{userId, tweetId})
}

func (tw *Twitter) GetNewsFeed(userId int) []int {
	user := tw.users[userId]
	if user == nil {
		return nil
	}

	var top10 []int
	for i := len(tw.twitters) - 1; i >= 0; i-- {
		if tw.twitters[i].user == user.id {
			top10 = append(top10, tw.twitters[i].id)
		} else if user.followers[tw.twitters[i].user] == true {
			top10 = append(top10, tw.twitters[i].id)
		}
		if len(top10) == 10 {
			break
		}
	}
	return top10
}

func (tw *Twitter) Follow(followerId int, followeeId int) {
	u := tw.users[followerId]
	if u == nil {
		u = &User{followerId, nil}
		tw.users[followerId] = u
	}
	if u.followers == nil {
		u.followers = make(map[int]bool)
	}

	u.followers[followeeId] = true
}

func (tw *Twitter) Unfollow(followerId int, followeeId int) {
	user := tw.users[followerId]
	if user == nil {
		return
	}

	if user.followers == nil {
		return
	}

	delete(user.followers, followeeId)
}
