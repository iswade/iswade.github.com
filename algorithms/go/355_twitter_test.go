package algorithms

import (
	"fmt"
	"testing"
)

func TestTwitter(t *testing.T) {
	twitter := ConstructorTwitter()
	twitter.PostTweet(1, 5)
	twitters := twitter.GetNewsFeed(1)
	fmt.Println(twitters)

	twitter.Follow(1, 2)
	twitter.PostTweet(2, 6)

	// 用户1的获取推文应当返回一个列表，其中包含两个推文，id分别为 -> [6, 5].
	// 推文id6应当在推文id5之前，因为它是在5之后发送的.
	twitters = twitter.GetNewsFeed(1)
	fmt.Println(twitters)

	// 用户1取消关注了用户2.
	twitter.Unfollow(1, 2)

	// 用户1的获取推文应当返回一个列表，其中包含一个id为5的推文.
	// 因为用户1已经不再关注用户2.
	twitters = twitter.GetNewsFeed(1)
	fmt.Println(twitters)
}

func TestTwitter01(t *testing.T) {
	/*
		"postTweet","getNewsFeed","follow","getNewsFeed","unfollow","getNewsFeed"]
		[1,1],      [1],           [2,1],   [2],          [2,1],     [2]]
	*/
	twitter := ConstructorTwitter()
	twitter.PostTweet(1, 1)
	twitters := twitter.GetNewsFeed(1)
	fmt.Println(twitters) // [1]

	twitter.Follow(2, 1)
	twitters = twitter.GetNewsFeed(2)
	fmt.Println(twitters) // [1]

	twitter.Unfollow(2, 1)

	twitters = twitter.GetNewsFeed(2)
	fmt.Println(twitters) // []
}
func TestTwitter02(t *testing.T) {
	/*
		"follow",  "getNewsFeed"
		[1,5],      [1],
	*/
	twitter := ConstructorTwitter()

	twitter.Follow(2, 5)
	twitters := twitter.GetNewsFeed(2)
	fmt.Println(twitters) // []
}

func TestTwitter03(t *testing.T) {
	twitter := ConstructorTwitter()

	twitter.PostTweet(11, 994)
	twitter.PostTweet(4, 303)
	twitter.PostTweet(1, 113)
	twitter.PostTweet(18, 309)
	twitter.PostTweet(8, 905)
	twitter.PostTweet(6, 605)
	twitter.PostTweet(1, 210)
	twitter.PostTweet(15, 15)
	twitter.PostTweet(1, 88)
	twitter.PostTweet(1, 704)
	res := twitter.GetNewsFeed(8)
	fmt.Println(res)
	twitter.PostTweet(9, 59)
	twitter.PostTweet(4, 851)
	twitter.PostTweet(13, 974)
	twitter.PostTweet(2, 133)
	twitter.PostTweet(15, 255)
	twitter.PostTweet(15, 662)
	twitter.PostTweet(16, 21)
	twitter.PostTweet(13, 227)
	twitter.GetNewsFeed(17)
	twitter.PostTweet(5, 603)
	twitter.Unfollow(10, 7)
	twitter.PostTweet(5, 816)
	twitter.PostTweet(7, 792)
	twitter.PostTweet(12, 260)
	twitter.GetNewsFeed(5)
	twitter.PostTweet(4, 586)
	twitter.PostTweet(1, 645)
	twitter.GetNewsFeed(20)
	twitter.PostTweet(15, 171)
	twitter.PostTweet(16, 18)
	twitter.PostTweet(3, 812)
	twitter.PostTweet(15, 153)
	twitter.PostTweet(12, 726)
	twitter.PostTweet(6, 508)
	twitter.PostTweet(17, 817)
	twitter.Follow(5, 6)
	twitter.PostTweet(3, 667)
	twitter.PostTweet(5, 599)
	twitter.PostTweet(13, 353)
	twitter.PostTweet(11, 282)
	twitter.PostTweet(7, 226)
	twitter.PostTweet(18, 423)
	twitter.PostTweet(13, 875)
	twitter.PostTweet(2, 738)
	twitter.PostTweet(6, 727)
	twitter.PostTweet(7, 374)
	twitter.PostTweet(19, 811)
	twitter.PostTweet(8, 418)
	twitter.PostTweet(2, 179)
	twitter.PostTweet(3, 476)
	twitter.Follow(9, 15)
	twitter.PostTweet(16, 8)
	twitter.PostTweet(19, 827)
	twitter.PostTweet(17, 203)
	twitter.PostTweet(13, 246)
	twitter.Follow(14, 8)
	twitter.PostTweet(13, 750)
	twitter.PostTweet(4, 595)
	twitter.PostTweet(1, 793)
	twitter.PostTweet(17, 995)
	twitter.PostTweet(11, 589)
	twitter.PostTweet(2, 115)
	twitter.PostTweet(18, 870)
	twitter.PostTweet(15, 426)
	twitter.PostTweet(18, 953)
	twitter.PostTweet(10, 318)
	twitter.PostTweet(10, 419)
	twitter.PostTweet(2, 164)
	twitter.GetNewsFeed(9)
	twitter.PostTweet(18, 854)
	twitter.PostTweet(3, 394)
	twitter.GetNewsFeed(17)
	twitter.PostTweet(4, 834)
	twitter.PostTweet(4, 349)
	twitter.Follow(2, 16)
	twitter.PostTweet(13, 534)
	twitter.PostTweet(3, 773)
	twitter.PostTweet(4, 292)
	twitter.PostTweet(5, 951)
	twitter.PostTweet(17, 554)
	twitter.PostTweet(4, 646)
	twitter.PostTweet(6, 412)
	twitter.PostTweet(15, 548)
	twitter.PostTweet(8, 188)
	twitter.PostTweet(5, 539)
	twitter.PostTweet(18, 732)
	twitter.PostTweet(8, 591)
	twitter.PostTweet(11, 733)
	twitter.PostTweet(1, 517)
	twitter.PostTweet(8, 156)
	twitter.PostTweet(13, 331)
	twitter.PostTweet(11, 889)
	twitter.PostTweet(12, 782)
	twitter.GetNewsFeed(11)
	twitter.PostTweet(2, 578)
	twitter.PostTweet(16, 487)
	twitter.PostTweet(12, 640)
	twitter.PostTweet(14, 112)
	twitter.PostTweet(10, 901)
	twitter.PostTweet(8, 807)
	twitter.PostTweet(7, 818)
	twitter.PostTweet(7, 627)
	twitter.Unfollow(14, 9)
	twitter.PostTweet(4, 522)
	twitter.PostTweet(7, 505)
	twitter.Unfollow(9, 13)
	twitter.GetNewsFeed(3)
	twitter.PostTweet(1, 971)
	twitter.PostTweet(18, 808)
	twitter.Follow(1, 17)
	twitter.PostTweet(7, 197)
	twitter.PostTweet(7, 361)
	twitter.PostTweet(2, 986)
	twitter.PostTweet(17, 6)
	twitter.PostTweet(7, 211)
	twitter.PostTweet(15, 342)
	twitter.PostTweet(5, 538)
	twitter.PostTweet(1, 711)
	twitter.PostTweet(11, 863)
	twitter.PostTweet(17, 339)
	twitter.PostTweet(5, 656)
	twitter.PostTweet(4, 402)
	twitter.PostTweet(1, 514)
	twitter.PostTweet(11, 566)
	twitter.Unfollow(12, 11)
	twitter.GetNewsFeed(12)
	twitter.PostTweet(19, 899)
	twitter.PostTweet(19, 526)
	twitter.PostTweet(20, 799)
	twitter.Unfollow(4, 1)
	twitter.PostTweet(17, 363)
	twitter.PostTweet(7, 845)
	twitter.PostTweet(15, 329)
	twitter.PostTweet(17, 369)
	twitter.Unfollow(18, 18)
	twitter.PostTweet(15, 848)
	twitter.PostTweet(5, 928)
	twitter.PostTweet(18, 105)
	twitter.GetNewsFeed(18)
	twitter.PostTweet(17, 785)
	twitter.PostTweet(11, 457)
}

func TestTwitter04(t *testing.T) {
	/*
		"postTweet","follow","follow", "getNewsFeed","postTweet","getNewsFeed","getNewsFeed",
		[1,5],       [1,2],   [2,1],   [2],           [2,6],      [1],          [2],
		"unfollow","getNewsFeed","getNewsFeed","unfollow","getNewsFeed","getNewsFeed"
		[2,1],      [1],          [2],          [1,2],     [1],          [2]
	*/

	tw := ConstructorTwitter()
	tw.PostTweet(1, 5)
	tw.Follow(1, 2)
	tw.Follow(2, 1)
	res := tw.GetNewsFeed(2) // 5
	fmt.Println(res)
	tw.PostTweet(2, 6)
	res = tw.GetNewsFeed(1) // [6, 5]
	fmt.Println(res)
	res = tw.GetNewsFeed(2) // [6, 5]
	fmt.Println(res)
}
