# Product biography

- [Designbrief](#designbrief)
  - [The Things Network](#the-things-network)
  - [Target audience](#target-audience)
  - [CLEVER°FRANKE](#clever%C2%B0franke)
  - [Design challenge](#design-challenge)
  - [Vision](#vision)
  - [Planning](#planning)
- [Research](#research)
	- [Target audience](#target-audience)
		- [Interviews](#interviews)
		- [Survey](#survey)
	- Data
		- Analysis
		- Workshop
	- Benchmark creation
		- Online
		- Books
- Inzichten
	- Data priority
	- User requirements
	- Moodboard
- Product
	- Concept schetsen
	- Top 3 concepts
	- High-fi 3 concepts
	- Design 0.1
	- Design 0.2
	- Design 0.3
	- Data pre-processing
	- Tech stack
	- Prototype
- [Sources](#sources)

## Designbrief

This graduation project is about using **The Things Network's** data to help their target audience understand that they are building a global, crowdsourced, open, free and decentralized _Internet of Things_ network.

This idea came to be in a conversation between the CEO of The Things Network (TTN) and the co-founder of CLEVER°FRANKE (C°F) in which they discussed a potential collaboration, but due to TTN's non-profit nature it couldn't be a commercial one. It was therefor decided that when C°F acquired a talented graduate, who also happens to be interested in the network, a pro-bono project mainly led by the graduate would take place.

### The Things Network

<div align="center">
  <img width="50%" src="./docs/ttn-logo.svg"/>
</div>

Before we dive into the details of this project, it is important to understand what problem The Things Network originally tried to solve, what _Internet of Things_ means, and how the network works.

#### History

The year is 1988, commercial computers are starting to become reasonably sized with dimensions similar to a small oven with around 8MB of RAM. A huge leap for home computing, yet only affordable for the aristocracy as prices could be as high as $6,500 (Thompson and Baran, 1988). This was also the year in which Mark Weiser, chief scientist at Xerox PARC (Palo Alto Research Center Incorporated), first introduced the term _'ubiquitous computing'_ ("Mark Weiser", N.D, para. 1). Ubiquitous computing, or _'ubicomp'_ for short, is a concept in which computing is made to appear everywhere and anytime. Weiser was obviously ahead of his time as most people couldn't comprehend what ubicomp would entail in daily life beyond their desk.

Today that's different. The transient clumsy desktop computer has been diversified into everyday objects, some the size of a breadcrumb and barely visible to naked eye if one isn't paying attention, or as Weiser (1991) puts it: _"specialized elements of hardware and software, connected by wires, radio waves and infrared, will be so ubiquitous that no one will notice their presence"_. Take Amsterdam for instance, the roads already have barely visible sensors present to improve traffic flow, some houses already have a smart thermostat that let's the user warm up the house before they arrive, and even self driving cars could be considered part of ubiquitous computing.

But if computers are intertwined into the real world, making everyday objects 'smart', then it's smartness only reaches as far as it's usefulness in isolation. We can observe motion and turn on a lightbulb, but what if we want all the lights to gradually change colour during the day? What if we want to move away from the set of disjointed experiences and offer a coherent service such as Claire Rowland (2009) describes: _"It’s important to consider not just the usability of individual UIs but interusability: distributed user experience across multiple devices"_.

Case in point: The buzz surrounding the Internet of Things. What's the buzz? Daniel Burrus (N.D) explains it: _"The Internet of Things revolves around increased machine-to-machine communication; it’s built on cloud computing and networks of data-gathering sensors; it’s mobile, virtual, and instantaneous connection"_. It is what will power the interusability. It can be as simple as a very small computer with a WiFi chip and manually connect it to the internet so it can communicate, or perhaps you can integrate a SIM card to use your telecom provider's network. Either way, it will be up to you or a remuneration to make it work.

Which brings us to The Things Network (N.D), a non-profit and open-source driven organisation focused on pushing interusability forward, or as they put it themselves:

> "The Things Network is building a network for the Internet of Things by creating abundant data connectivity, so applications and businesses can flourish. The technology we use is called LoRaWAN and it allows for things to talk to the internet without 3G or WiFi. So no WiFi codes and no mobile subscriptions. It features low battery usage, long range and low bandwidth. Perfect for the internet of things."

#### How it works

![Screenshot of The Things Network website](./docs/ttn.png)

The main building block of the network is the gateway. Small, easy to install, it essentially is a router between the things and the internet. With it you are creating the most substantial aspect of your connected city’s network.

The Things Network's original kickstarter compaign (N.D) describes the following advatages of the gateway:

> - About 20% of the cost of any currently available LoRaWAN gateway
> - Provides up to 10 km / 6 miles radius of network coverage
> - Connects easily to your WiFi or Ethernet connection
> - Security through the https connection and embedded in the LoRaWAN protocol
> - Runs on open hardware 
> - Contains GPS to determine the gateway’s location and node's location later
> - Can serve up to 10,000 nodes

##### LoRaWAN - A new technology optimized for connectivity of things
> All this is enabled by a technology called LoRa. LoRa is a low energy, low bandwidth, long range (over 10km / 6 miles) wireless technology and uses an open data frequency. As we are setting up the network together there is no need for an operator. This amazing technology allows for things to talk to the internet without 3G, WiFi or Bluetooth. No wifi codes, heavy battery usage or worse, monthly subscriptions needed. 

> The technology was standardized by the [LoRa Alliance](https://lora-alliance.org/) and is a result of a collaboration between IBM and chipmaker Semtech. LoRaWAN is currently active on different open frequencies. The Things Network is an official member of the LoRa Alliance.

> The technology is currently enrolled in France, the Netherlands, Switzerland, Belgium and South Africa. All by larger telecommunication corporations. To make this an open network with no subscriptions we propose a decentralized, crowdsourced alternative to telcos. And to get there we need affordable and open, hardware. 


#### Problem

At the time of writing there are 4524 gateways up and running worldwide, each extending the network by a few kilometres. Immense amount of data pours through it every second and currently one can only look at the technical insights of the gateway's their allowed to see. There are, however, social insights on their website such as communities to organise meet-ups and provide updates near you, as well as labs where users can share stories about their creations. Besides those, there are still a lot of interesting, but inaccessible, data for the user in the The Things Network's backend. It is clear that there could and should be a encapsulating product that brings those things together, a product that truly shows the impact and possibilities of the network.

The initial briefing at The Things Network illustrated that this product is necessary to clear their lacking transparency and therefor lesser authority.

##### The current challenges

- Clarifying what the technology is and how the network works .
- Showing for what kind of applications you can use it (what it does and doesn’t).
- Explain that it’s open en created and used by the community.
- Reaching their target audience.
- Finding professional partners who can build solid solutions with TTN.

If you were to take a look at their website, you'll only see a map with the locations of the connected gateways as can be seen above. Owners of a gateway can log-in to gain insights into their gateway's traffic, but that's only for those who are authorised to see it. There isn't something that shows what is really going on inside the network for newcomers or people interested in metrics beyond their sole gateway.

##### Expectations

The challenges from the meeting also resulted in certain expectations.

- Create transparency in data.
- Show size and impact of network.
- Gain Authority.
- Should be based on real data from TTN.
- Show performance of TTN.
- Prevent people from using TTN for unrealistic applications.
- Show applications of successful solutions.
- Easy to understand during conference presentation.
- Using storytelling techniques to tell the story behind TTN.

### Target audience
**The target audience are early adopter and early majority Internet of Things developers who are interested yet unfamiliar with LoRaWAN.**

Early majority and adopters are terms part of the diffusion of innovations theory that seeks to explain how, why, and at what rate new ideas and technology spread (Wikipedia, 2018).

<div align="center">
  <img src="./docs/innovation-diffusion.png" width="60%" alt="Diffusion of innovation curve" />
  <p>Diffusion of innovation</p>
  <p><i>https://cryptosigma.files.wordpress.com/2014/09/graph.jpg</i></p>
</div>

Everett Rogers, a professor of communication studies, summarized the categories (Wikipedia, 2018) as:

- **Innovators** – Innovators are willing to take risks, have the highest social status, have financial liquidity, are social and have closest contact to scientific sources and interaction with other innovators. Their risk tolerance allows them to adopt technologies that may ultimately fail. Financial resources help absorb these failures.
- **Early adopters** – These individuals have the highest degree of opinion leadership among the adopter categories. Early adopters have a higher social status, financial liquidity, advanced education and are more socially forward than late adopters. They are more discreet in adoption choices than innovators. They use judicious choice of adoption to help them maintain a central communication position.
- **Early majority** – They adopt an innovation after a varying degree of time that is significantly longer than the innovators and early adopters. Early Majority have above average social status, contact with early adopters and seldom hold positions of opinion leadership in a system.
- **Late majority** – They adopt an innovation after the average participant. These individuals approach an innovation with a high degree of skepticism and after the majority of society has adopted the innovation. Late Majority are typically skeptical about an innovation, have below average social status, little financial liquidity, in contact with others in late majority and early majority and little opinion leadership. 
- **Laggards** – They are the last to adopt an innovation. Unlike some of the previous categories, individuals in this category show little to no opinion leadership. These individuals typically have an aversion to change-agents. Laggards typically tend to be focused on "traditions", lowest social status, lowest financial liquidity, oldest among adopters, and in contact with only family and close friends. 

#### So how does this translate back to our IoT developers?
Right now The Things Network is making the jump from early adopters to early majority and that causes a shift in how you want to approach them. Early adopters tend to need some assurances of credbility and reliability, where's that should be a given for the early majority and they rather see what you can do with it.

Because TTN is transitioning between these two, the product should therefor focus on a mixture of both.

### CLEVER°FRANKE
![Screenshot of The Things Network website](./docs/cf.png)

This project is done with help of C°F.

## Sources

Burrus, D. N.D. The Internet of Things Is Far Bigger Than Anyone Realizes. Retrieved April 19, 2018 from https://www.wired.com/insights/2014/11/the-internet-of-things-bigger/

Giezeman, W. N.D. The Things Network. Retrieved September 23, 2018 from https://www.kickstarter.com/projects/419277966/the-things-network

N.A. (2017, December 20). Mark Weiser. Retrieved April 19, 2018 from https://en.wikipedia.org/wiki/Mark_Weiser

N.A. The Things Network. Building a fully distributed Internet of Things infrastructure. Retrieved April 19, 2018 from https://www.thethingsnetwork.org/

N.A. (2018, September 19). Diffusion of innovations. Retrieved September 23 2018 from https://en.wikipedia.org/wiki/Diffusion_of_innovations

Roland, C. (2009). Designing Connected Products. Retrieved April 19, 2018 from http://www.designingconnectedproducts.com/

Thompson, T. & Baran, N. (1988, November). "The NeXT Computer". Retrieved May 10, 2018, from http://simson.net/ref/NeXT/byte_article.html

Weiser, M. (1991, September). The Computer for the 21st Century [PDF]. Retrieved April 19, 2018 from 
https://www.lri.fr/~mbl/ENS/FONDIHM/2012/papers/Weiser-SciAm91.pdf
