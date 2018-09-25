# Product biography

- [Designbrief](#designbrief)
  - [The Things Network](#the-things-network)
  - [Target audience](#target-audience)
  - [CLEVER°FRANKE](#clever%C2%B0franke)
  - [Design challenge](#design-challenge)
  - [Focus](#focus)
  - [Vision](#vision)
  - [Planning](#planning)
- [Research](#research)
	- [Target audience](#target-audience2)
		- [Interviews (WIP)](#interviews)
		- [Survey](#survey)
	- [Data](#data)
		- [Analysis](#analysis)
		- [Workshop](#workshop)
- Insights
	- Storytelling direction
	- Data drawbacks
- [Product](#product)
	- [Brainstorm](#brainstorm)
	- [Top 3 concepts](#top-3-concepts)
	- [Concept presentation](#concept-presentation)
	- [Ideation](Ideation)
	- Design 0.1
	- Design presentation
	- Expert review
	- Design 0.2
	- Expert review
	- Data pre-processing
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

---

### Target audience
**The target audience are early adopter and early majority Internet of Things developers who are interested yet unfamiliar with LoRaWAN.**

Early majority and adopters are terms part of the diffusion of innovations theory that seeks to explain how, why, and at what rate new ideas and technology spread (Wikipedia, 2018).

<div align="center">
  <img src="./docs/innovation-diffusion.png" width="60%" alt="Diffusion of innovation curve" />
  <p>Diffusion of innovation</p>
  <p><i>https://cryptosigma.files.wordpress.com/2014/09/graph.jpg</i></p>
</div>

The Diffusion of Innovation Theory (Wayne W, 2018), summarized the categories as:

- **Innovators** – These are people who want to be the first to try the innovation. They are venturesome and interested in new ideas. These people are very willing to take risks, and are often the first to develop new ideas. Very little, if anything, needs to be done to appeal to this population..
- **Early adopters** – These are people who represent opinion leaders. They enjoy leadership roles, and embrace change opportunities. They are already aware of the need to change and so are very comfortable adopting new ideas. Strategies to appeal to this population include how-to manuals and information sheets on implementation. They do not need information to convince them to change.
- **Early majority** – These people are rarely leaders, but they do adopt new ideas before the average person. That said, they typically need to see evidence that the innovation works before they are willing to adopt it. Strategies to appeal to this population include success stories and evidence of the innovation's effectiveness.
- **Late majority** – These people are skeptical of change, and will only adopt an innovation after it has been tried by the majority. Strategies to appeal to this population include information on how many other people have tried the innovation and have adopted it successfully.
- **Laggards** – These people are bound by tradition and very conservative. They are very skeptical of change and are the hardest group to bring on board. Strategies to appeal to this population include statistics, fear appeals, and pressure from people in the other adopter groups.

#### So how does this translate back to our IoT developers?
Right now The Things Network is making the jump from early adopters to early majority and that causes a shift in how you want to approach them. Early adopters tend to need some assurances of credibility and reliability, where's that should be a given for the early majority and they rather see what you can do with it.

Because TTN is transitioning between these two, the product should therefor focus on a mixture of both.

---

### CLEVER°FRANKE
![Screenshot of The Things Network website](./docs/cf.png)

[CLEVER°FRANKE](http://cleverfranke.com/) is a data driven design agency located in Utrecht. Their focus lies mostly within visualising complex data structures on the web to provide insights which normally wouldn't be possible.

Their vision as they put it themselves:

> We want to provide people with the means to interact with and experience the world in new and exciting ways. Through these enriched experiences, we aim to reveal new perspectives, ultimately leading to a better understanding of the world we live in.

C°F's co-founder Gert Franke will provide occasional guidance and feedback during this project. C°F's incentive to help comes from a educational stance, and thus will this project be treated similarly to an internship.

---

### Design challenge
**How can an interactive and storytelling data driven experience convince
early adopter and early majority Internet of Things developers who are interested yet unfamiliar with LoRaWAN, of the credibility, impact, and underlying technology of the network so they are eager to participate?**

#### Sub-challenges

1. What is interactivity?
2. What is storytelling?
3. How do you validate the target audience's needs and priorities?
4. How do you assure users of the creditability and impact of the network? 
5. How do you integrate the clarification of LoRaWAN into the product?
6. How do you make a user eager to participate?

---

### Focus
It is imporant to note that this graduation project isn't just the execution of a single discipline, but all the disciplines that make up CMD. I am responsible for the communication/project/expectation management with the client (TTN), the concept, it's user experience and visual design, and the full technical realisation of a new experience for the largest global distributed LoRa network.

But because of that this project won't be about thoroughly researched and heavily iterated UX/visual design or the most perfect possible match for it's target audience, at least not in full. To finish such an ambitious project within the given time, the focus becomes more a series of choices and prioritisations that result in continuously keeping this project afloat, while minimally affecting the end-user. That's what makes this project valuable, an ode to everything I learned at CMD shaped into a real-world project with real-world compromises, stakeholders, and deliveries.

Even though I'm taking it upon myself to do this, I'm offially a Front-end Developer and see myself graduating as such. However, this obviously can't all resolve around the code so below are the disciplines in order of importance for me. 

#### 1. Concept
The concept is the fundament of the product. Exploring multiple concepts and finding the best fit in conjuction with The Things Network and the target audience is definitely important.

#### 2. Technical prototype
As discussed and promised with The Things Network, a working 0.9 product should be delivered in the end. It is therefor the highest priority after the concept itself.

#### 3. UX/Visual design
User experience is key into making the concept work and will not be treated lightly. However, continuous iterations into the nitty gritty details of the UX and visual design might be out of scope. My expertise of choice is development after all.

---

### Vision
As the data will be the main starting point besides the requirements and the problems of the target audience, we can already predict possible interesting correlations regardless of the concept. For example the aggregated data, the technical summaries of the gateways, is very contrasting in nature to social data such as communities which is about meet-ups and updates from closely gathered people. Yet adding a more everyday social side to the performance metrics is what potentially could make it more compelling, as it could involve the user on a more personal and/or local level. In the end it will come down to a carefully chosen ratio between technical and social, one more apparent than the other, based on what the target audience values the most as the outcome should increase the conversion in participation, but the form remains unknown for now.

---

### Planning
![Timeline planning](./docs/timeline.png)

#### 13 April
The fist meeting with The Things Network is mainly introductory  to get the know the organisation and what it stands for.

*Deliverables*

	- What are TTN's foremost challenges for the near future.
	- Who are the users.
	- What does TTN hope to gain out of this project.
	- The extend, availability, and maintainability of the data.

*How*

	- Interview
	- Sketchnotes

#### 23 - 27 April (1 week)
Knocking out remaining uncertainties surrounding the data and the target audience while doing desk research on Internet of Things, The Things Network, and LoRaWAN.

*Deliverables*

	- Target audience specification with their main problem, when it occurs, and why.

*How*

	- Follow-up interview
	- Survey
	- Sketchnotes
	- Deskresearch

#### 30 April - 4 May (1 week)
Reces.

#### 7 - 30 May (3 weeks)
The prerequisites are there, now it is time to come up with an idea.

*Deliverables*

	- Acquire definitive goals and requirements
	- Inspiration research on similar products.
	- Concept brainstorm
	- Proof of concept
	- Finalise concept 

*How*

	- Competitive analyses
	- Benchmark creation
	- Brainstorm
	- Peer review

#### 1 June
Pitch the concept to The Things Network.

#### 2 - 31 June (4 weeks)
These weeks are all about defining the UX and how a storytelling experience could be achieved.

*Deliverables*

	- Low-fidelity prototype
	- Style guide (typography, colours, layout)
	- High-fidelity prototype
	- Tech stack

*How*

	- Prototyping
	- Storytelling
	- Co-creation

#### 2 - 6 July (1 week)
Because this is the final week before the summer break this time will be spend on splitting everything up into small tasks and create an entire backlog for development. This is also the week where to concept will be tested in the form of a prototype with the target audience.

*Deliverables*

	- Backlog
	- User testing results
	- Possible concept, UX, or visual adjustments

*How*
	
	- Defining features
	- Splitting up features
	- Interviews

#### 7 July - 12 August
Summer break.

#### 13 August - 7 September (4 weeks)
In these weeks to product will come to life in the form of a MVP, which will also be user tested.

*Deliverables*

	- Minimal viable product
	- User testing rapport

*How*

	- Development
	- User testing

#### 10 - 28 September (3 weeks)
Iteration will be the sole purpose of these weeks.

*Deliverables*

	- Product 0.9

*How*

	- Development

#### 1 - 19 October (3 weeks)
Iteration will be the sole purpose of these weeks.

*Deliverables*

	- Product 1.0

*How*

	- Development
	- Visual adjustments
	- UX adjustments

#### 22 - 26 October (1 week)
Promo video and finalise documentation.

#### 29 October - 2 November (1 week)
Presentation and finalise documentation.

## Research
### Target audience 
<div id='target-audience2'/>

#### Interviews
We want to find out what drives people to learn about TTN and what topics and metrics of the available data are especially relevant so they can be prioritised.

##### Goals
- What drives them to find out about LoRaWAN and The Things Network?
- How important is the credibility of the network? (how mature and stable)?
- How relevant is it to understand the underlying technology?
- How much do they care about real-time performance metrics of the network?
- How much do they care about communities and what goes on near them?
- What is the most important thing they'd need to know before they consider participating?

##### Introduction
Before jumping straight to the questions surrounding TNN and the underlying technology, a few introductory questions are asked to make each other feel comfortable and to get a better understanding of whom I am talking to.

1. Could you tell me a bit about yourself?
2. When did you first get into IoT and why?
3. Are you currently into IoT professionally or more has a hobby?
4. At what scale do of IoT do you operate on?
5. Could you chronologically tell me about a few of your creations or IoT projects you participated in?

##### The Things Network
1. How do you usually approach internet connectivity?
	1. Is that process troublesome? If so, why?
2. Have you heard of a technology called LoRaWAN?
	1. Could you elaborate how it works?
3. Have you heard of The Things Network?
	1. Could you elaborate how it works?

*Explain or elaborate LoRaWAN and The Things Network*

The Things Network (TTN) is building a network for the Internet of Things by creating abundant data connectivity, so applications and businesses can flourish. It is a distributed network by the users, for the users, and there are currently already 3838 gateways up and running worldwide. TTN is an open-source and non-profit organisation and one can participate in multiple ways to help the network and yourself.

The technology they use is called LoRaWAN and it allows for things to talk to the internet without 3G or WiFi. So no WiFi codes and no mobile subscriptions.

It features low battery usage, long range and low bandwidth. Perfect for the internet of things.

More information: https://www.thethingsnetwork.org/

1. Do you have any questions that immediately come to mind?
2. Is this something that interests and might help you?
3. What would you consider to be the most important factors before considering your participation in the network?
3. In what way would you be interested to participate? (Infra, hardware, software)
4. Is it important to you to comprehend how the network runs on LoRaWAN?
5. How important is the maturity and stableness of the network to you? Is there some sort of minimal requirement? Would you be interested in (real-time) performance metrics?
6. Are active communities within the network near you something that would interest you? Why? Would you consider working together with someone through the network?
7. Now that we talked about multiple aspects of the network such as the communities, the hardware, software, performance, maturity, and the underlying technology - what things matter to most to you? (ranking)

##### Results
Some answers are only documented in part to leave out irrelevant context.

###### Daan Rongen
**Could you tell me a bit about yourself?**

> Student of the Intelligent Environments minor.

**When did you first get into IoT and why?**


**Are you currently into IoT professionally or more has a hobby?**

**At what scale do of IoT do you operate on?**

**Could you chronologically tell me about a few of your creations or IoT projects you participated in?**

##### Conclusion

#### Survey
The Things network send out a survey with multiple questions through their newsletter. A summary of the results can be found below.

##### What are you mainly using The Things Network for?

| Reason                                                                  | Count   | Percentage |
| :---------------------------------------------------------------------- | :------ | :--------- |
| To learn about / experiment with LoRa and LoRaWAN                       | 124     | 29%        |
| To develop commercial LoRa / LoRaWAN products or services               | 88      | 21%        |
| Personal reasons / hobby                                                | 68      | 16%        |
| To join the mission of building an open and decentralized network       | 60      | 14%        |
| Research & education                                                    | 44      | 10%        |
| To build a PoC                                                          | 20      | 5%         |
| To build professional relationships in the LoRaWAN industry             | 10      | 2%         |
| To interact with the community (on the Forum, Slack or community pages) | 5       | 1%         |
| Other                                                                   | 22      | 5%         |
| **Total**                                                               | **426** | **100%**   |

##### What subjects are you mainly interested in?
*This questions was multiple choice which means every reason is relative to the total amount of participants.*

| Reason                                                        | Percentage |
| :------------------------------------------------------------ | :--------- |
| Open Source development                                       | 58%        |
| LoRaWAN education                                             | 52%        |
| Community building                                            | 44%        |
| Interoperability with other LoRaWAN networks                  | 40%        |
| Conferences and events                                        | 26%        |
| Offering products/services via The Things Network Marketplace | 23%        |
| Access to professional LoRaWAN partners                       | 21%        |
| Buying/reselling private LoRaWAN networks                     | 20%        |

##### What is your occupation?

| Occupation                 | Count   | Percentage |
| :------------------------- | :------ | :--------- |
| Software developer         | 111     | 26%        |
| Hardware developer         | 62      | 15%        |
| Network engineer/architect | 54      | 13%        |
| Academic or researcher     | 47      | 11%        |
| Student                    | 36      | 9%         |
| Product manager            | 33      | 8%         |
| Sales or account manager   | 5       | 1%         |
| Marketeer                  | 3       | 1%         |
| Other                      | 79      | 19%        |
| **Total**                  | **422** | **100%**   |

##### How would you describe the main activity of your company?

| Activity                     | Percentage |
| :--------------------------- | :--------- |
| Product Development          | 30%        |
| Education or research        | 19%        |
| IT consultancy               | 15%        |
| Systems Integrator           | 12%        |
| Application service provider | 8%         |
| Network Operator             | 5%         |
| (Electronic) distributor     | 1%         |
| Other                        | 10%        |

##### Conclusion
So what does this tell us about the target audience? It seems the most profound use of The Things Network is to experiment with LoRaWAN and secondly to pursue a commercial goal. But if you take the other non-commercial motivations like hobby's and research into account it's fair to say that most people are in it for themselves. The interest in LoRaWAN is further proven as it comes in as the second subject their most interested in, together with Community building. Further more, the companies these people work for seem to be the most into product development and also a surprisingly large education or research part. Overall does the target audience mainly consist of Software Developers who are also into Open Source development.

---

### Data

#### Analysis
Because The Things Network recieves massive amounts of data every second real-time it became undoable to store everything. Instead, they **aggregate every 30 seconds, which is stored for 2 hours, and every hour, which is stored for 2 years**. Unfortunately the sets have to be manually exported from their backends.

The following datasets are available:

- **Broker** - handles a range of device addresses and is responsible for finding the right Handler to forward each message to.
- **Handler** - responsible for encryption, decryption and conversion of messages and for forwarding messages to applications
- **Gateway** - the main building block of the network, the intermediary to the internet by recieving packets over LoRaWAN.

There are also non-technical data sets available:

- **Communities** - platform for meetups, discussing usecases, and helping each other out in the world of IoT.
- **Labs** - place where user's share their creations and optional tutortials on how to recreate them.

Lastly, TTN also has a public API called **[NOC](http://noc.thethingsnetwork.org:8085/api/v2/gateways)** which has similar data to the above data sets, but with a few unique data points like gateway location (lat, long) and gateway altitude.

Below are listed the possible insights after careful analysis of all the individual data points from the available data sets.

##### Aggregations (30 sec & 1 hour summaries)
###### Broker / Handler	

* Apps with the most uplinks
* Apps with the most downlinks
* Devs with the most uplinks
* Devs with the most downlinks
* Uplinks overtime
* Downlinks overtime
* Hour or day with the most uplinks
* Hour or day with the most downlinks
* Hour or day with the most uplink bytes
* Hour or day with the most downlink bytes

*Amount of…*
* Uplinks
* Downlinks
* Apps
* Devs
* Gateways
* ID’s (a.k.a regions e.g. ’ttn-broker-eu’)

*Percentage of…*
* ID’s (a.k.a regions e.g. ’ttn-broker-eu’)

###### Gateway

* Percentage bandwidth x with spreading factor x
* Uplinks vs. bandwidth
* Downlinks vs. bandwidth
* Uplinks vs. spreading factor
* Downlinks vs. spreading factor
* Gateways responsible for half of uplink network traffic
* Hour or day with the most uplinks
* Hour or day with the most downlinks
* Hour or day with the most uplink bytes
* Hour or day with the most downlink bytes

*If total gateways is known:*
* Active gateways (online at least once during period)
* Online ratio of active gateways during period
* Gateways with online ratio >= 0.99 during period
* % of gateways with online ratio >= 0.99 during period

*Amount of…*
* Uplinks
* Downlinks
* Uplink bytes
* Downlink bytes

*Percentage of…*
* Bandwidth (125 vs 250 vs 500)
* Spreading factor (1 vs … vs. 12)
* Frequency range

###### Communities

* Date of creation vs. communities (e.g. 5 communities exist for 2 years)
* Number of gateways per community
* Official communities vs. Communities

*Total…*
* Communities
* Official communities
* Contributors
* Core contributions
* Meet-ups
* Posts
* Stories

*Updates:*
 * Community published
 * New post
 * New meet-ups
 * New gateway
 * Story is public on Labs
 * New group on Labs
 * New partner
 * New community
 * Reach N contributors
 * Community becomes official
 * New member community
 * Update community page
 * Nearby community is published
 * Nearby community official
 * Nearby community meetup
 * New community resource
 * New core member
 * New story from community contributor
 * Month Anniversary Community
 * Year Anniversary Community

###### NOC
* Location of gateways (long, lat)
* Altitude of gateways (1 …. 300?)

###### Cross-set combinations
* Uplinks vs. gateway locations
* Downlinks vs. gateway locations
* Meetups vs. Locations
* Gateways responsible for half of uplink network traffic vs. Locations

#### Workshop
![Photo of the workshop meeting room](docs/workshop-overview.jpg)
▶ *Photo of the meeting room where the data workshop took place*

The data workshop was setup to prioritise the findings from the data analysis. The presentation and steps can be found [here](./docs/data-workshop.pdf).

##### Result
- Multiple scales: global, country, city
- Make certain metrics more appealing by contextualising it in the most relevant scale.
- Potential gamification through uptime and uplink / downlink efficiency
- Slightly move from proving trust to this is what you can do.

###### Data priority
![Photo of the workshop meeting room](docs/workshop-wall.jpg)
These are the metrics with the highest priority.

*Brokers & handlers*
- Total Apps
- Total Devs
- % ID's
- Uplinks / downlinks broken down by time (e.g by day)
- Hour or day with the most uplinks / downlinks

*Gateways*
- Total uplinks / downlinks
- Uplinks / downlinks vs. Spreading factor
- Uplinks / downlinks vs. Location
- Frequency range usage
- Gateways responsible for half of the uplink/downlink traffic
- Active gateways (online at least once during period)
- Online ratio of active gateways during period
- Gateways with online ratio >= 0.99 during period
- % of gateways with online ratio >= 0.99 during period

*Communities*
- Total communities
- Total meetups

*Updates*
- New meet-up
- New community
- Community becomes official
	- Anniversaries

###### Maintainability & responsibility

*Real-time*

The workshop showed great interest in using their public API ro showcase the prioritised data real-time. But that would require additional endpoints as well as changes to the structure of some existing API responses. The exact estimate and feasibility of this remains unknown for now.

*Ownership*

Data responsibility was also discussed in order to clear things up about who should deliver what. TTN becomes responsible for the delivery of all the needed data, but the exact structure and formatting the front-end might need, is up to me. This would most likely require data pre-processing through an automated handmade script.

## Product

### Brainstorm
![](docs/books.jpg)
The brainstorm is a series of sketches, some of them inspired by the wide range of data visualisation books available at CLEVER°FRANKE.

These three books served the most as reference:
- **Infographic Designer's Sketchbooks** *by S. Heller & R. Landers*
- **Visual Storytelling** *by R. Klanten, S. Ehmann, F. Schulze*
- **Information Graphics** *by S. Rendgen*

<img src="./docs/sketches/IMG_20180925_103615.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103638.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103641.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103649.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103652.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103700.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103703.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103715.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103725.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103728.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103735.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103737.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103755.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103801.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103809.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103815.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103818.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103823.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103827.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103838.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103909.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103926.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103938.jpg" width="442px"/>

### Top 3 concepts
The above sketches eventually eventually led to the following concepts, they are mostly combinations of multiple sketched out ideas. 

The high-fi concepts in this section initially looked like literal digitized sketches, like this example below, but I recieved the feedback that clients usually can't look further than the sketch itself and it's therefor important to add some visual style to it for their imagination. For clarity sake I'm only showing the visual ones.

<img src="./docs/raw-concept-dashboard.png" width="442px"/>



#### Performance dashboard
The first concept is a safe choice, an interactive analytics dachboard. It represents the current state of The Things Network and is mostly focused on performance metrics.

![](docs/concept-dashboard.png)


#### Packet Traveller
The Packet Traveller is a storytelling and animated experience in which the user follows a single packet through all the network's underlying steps. It's also very convenient that the underlying steps happen to be almost the same as the available data sets (e.g Broker step has a broker data set). Small details like LoRa's [modulation](https://duckduckgo.com/?q=modulation&t=ffab&iax=images&ia=images) wave could also be visually incorporated into this concept.

![](docs/concept-packettraveller.png)

#### Compare
![](docs/concept-compare.jpg)
![](docs/concept-compare2.jpg)

### Concept presentation
These concepts were then brought to The Things Network to find out which direction we were going to take.
The presentation can be found [here](./docs/concepts.pdf).

The Packet Traveller was eventually chosen as the concept.

### Ideation
Now that the concept direction has been chosen, it's time to go into how things are going to look and work.

#### Jeremy Raider
![](docs/jeremy-wall.jpg)

I did a small ideation session with a fellow intern at CLEVER°FRANKE.

##### Result
- 'Zooming' effect might be interesting. TTN is a global network but you can create suspense by showing only a city and then gradually zoom out to reveal it's worldwide coverage.
- The encryption step in the Packet Traveller could be a riddle that gradually onfolds. For instance, the value of the packet might be glitched but in the end it shows itself.
- Let the packets move towards gateways on the map to create some sort of marching ants effect.

---

#### Sketches

<img src="./docs/sketches/IMG_20180925_104000.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_103952.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104013.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104018.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104037.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104045.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104050.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104053.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104100.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104106.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104109.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104204.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104206.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104212.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104216.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104230.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104237.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104240.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104250.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104302.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104308.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104316.jpg" width="442px"/>
<img src="./docs/sketches/IMG_20180925_104640.jpg" width="442px"/>

### Design 0.1
First version of the design can be found [here](./docs/design-0.1.pdf).

### Design presentation
The design presentation can be found [here](./docs/design-presentation.pdf).

### Expert review

Every Wednesday from 9:00 till 10:00 there's design review at CLEVER°FRANKE by and for all the (UX) designers. One can scheduele some time for something they'd like a review on and so I did for my first draft of the design.

The design review team consists of:
- **Thomas Clever** - Co-founder & Director
- **Wouter van Dijk** - Lead UX Designer
- **Roel De Jonge** - Lead Visual Designer
- **Pietro Lodi** - Designer
- **Joe Chrisman** - UX Designer
- **Bas Van Den Brugh** - Designer
- **Joost Mommers** - Designer
- **Jonas Groot Kormelink** - Creative Coder
- **Marigo Heijboer** - UX Designer

#### Feedback
- Clicking a story on the map expands it's context and allows to enter the Packet Travaller via a button. This, however, falsely indicates the underlying steps differ per story.
- Separate stories and packet traveller
- Traveller icons too abstract, hard to find meaning.
- Make gateways toggle instead of switch between states.
- Don’t reuse shapes for different purposes.
- Make signal more consistent.
- Put context on each signal, for instance, it's a heat sensor value.

### Design 0.2
### Expert review
### Data pre-processing
### Prototype

## Sources

Burrus, D. N.D. The Internet of Things Is Far Bigger Than Anyone Realizes. Retrieved April 19, 2018 from https://www.wired.com/insights/2014/11/the-internet-of-things-bigger/

Giezeman, W. N.D. The Things Network. Retrieved September 23, 2018 from https://www.kickstarter.com/projects/419277966/the-things-network

N.A. (2017, December 20). Mark Weiser. Retrieved April 19, 2018 from https://en.wikipedia.org/wiki/Mark_Weiser

N.A. The Things Network. Building a fully distributed Internet of Things infrastructure. Retrieved April 19, 2018 from https://www.thethingsnetwork.org/

N.A. (2018, September 19). Diffusion of innovations. Retrieved September 23, 2018 from https://en.wikipedia.org/wiki/Diffusion_of_innovations

Roland, C. (2009). Designing Connected Products. Retrieved April 19, 2018 from http://www.designingconnectedproducts.com/

Thompson, T. & Baran, N. (1988, November). "The NeXT Computer". Retrieved May 10, 2018, from http://simson.net/ref/NeXT/byte_article.html

Wayne, W. (2018, August 29). Diffusion of Innovation Theory. Retrieved September 24, 2018, from http://sphweb.bumc.bu.edu/otlt/MPH-Modules/SB/BehavioralChangeTheories/BehavioralChangeTheories4.html

Weiser, M. (1991, September). The Computer for the 21st Century [PDF]. Retrieved April 19, 2018 from 
https://www.lri.fr/~mbl/ENS/FONDIHM/2012/papers/Weiser-SciAm91.pdf