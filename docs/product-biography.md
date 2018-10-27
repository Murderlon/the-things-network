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
    - [Interviews](#interviews)
    - [Survey](#survey)
  - [Data](#data)
    - [Analysis](#analysis)
    - [Workshop](#workshop)
  - [Persuasive storytelling](#persuasive-storytelling)
- [Insights](#insights)
  - [Data complexity](#data-complexity)
- [Product](#product)
  - [Brainstorm](#brainstorm)
  - [Top 3 concepts](#top-3-concepts)
  - [Concept presentation](#concept-presentation)
  - [Ideation](Ideation)
  - [Design 0.1](#design-0.1)
  - [Design presentation](#design-presentation)
  - [Expert review](#expert-review)
  - [Design 0.2](#design-0.2)
  - [Expert review](#expert-review2)
  - [Design 0.3](#design-0.3)
- [Sources](#sources)

## Designbrief

This graduation project is about using **The Things Network's** data to help their target audience understand that they are building a global, crowdsourced, open, free and decentralized _Internet of Things_ network.

This idea came to be in a conversation between the CEO of The Things Network (TTN) and the co-founder of CLEVER°FRANKE (C°F) in which they discussed a potential collaboration, but due to TTN's non-profit nature it couldn't be a commercial one. It was therefor decided that when C°F acquired a talented graduate, who also happens to be interested in the network, a pro-bono project mainly led by the graduate would take place.

### The Things Network

<div align="center">
  <img width="40%" src="./assets/ttn-logo.svg"/>
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

![Screenshot of The Things Network website](./assets/ttn.png)

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
  <img src="./assets/innovation-diffusion.png" width="60%" alt="Diffusion of innovation curve" />
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
![Screenshot of The Things Network website](./assets/cf.png)

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
![Timeline planning](./assets/timeline.png)

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
**Jurjen De Vries**

Jurjen is a entrepreneur and helps companies with technological innovation. This usually entails providing support in research or applying new technologies such as AI, Blockchain, or 3D printing within a company. Jurjen is a true innovator and likes to immediately jump on bleeding edge things to try them out. In his free time he also helps small initiatives, like The Things Network a while ago, when he started the [TTN Utrecht community](https://www.thethingsnetwork.org/community/utrecht/).



**Daan Rongen**

..

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
![Photo of the workshop meeting room](assets/workshop-overview.jpg)
▶ *Photo of the meeting room where the data workshop took place*

The data workshop was setup to prioritise the findings from the data analysis. The presentation and steps can be found [here](./assets/data-workshop.pdf).

##### Result
- Multiple scales: global, country, city
- Make certain metrics more appealing by contextualising it in the most relevant scale.
- Potential gamification through uptime and uplink / downlink efficiency
- Slightly move from proving trust to this is what you can do.

###### Data priority
![Photo of the workshop meeting room](assets/workshop-wall.jpg)
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

---

### Persuasive storytelling
> "Storytelling is the interactive art of using words and actions to reveal the elements and images of a story while encouraging the listener’s imagination" - [storytelling.design](https://storytelling.design)

According to Ceros Inc. (2016, May 25) writes that telling a visual story isn’t the same as designing a website or landing page. Your job is one of co-author, crafting the graphic part of the narrative that intertwines with the verbal part of the story. Following similar steps to that of a traditional writer—nailing down your story, defining you visual grammar, developing a story arc, and finding threads to weave through the entire narrative—you’ll be able to design content that makes a lasting impact on your audience.

#### How do we design stories to be great user experiences?

Adam Westbrook in *'Storytelling + Design Thinking'* states that it begins by identifying the problem, in the case of narrative: what is the idea or the meaning we are trying to convey? In narrative terms this is known as the Controlling Idea and it is, from experience, the hardest part of the process. We must distill and refine a complex idea into an essence that is simple and yet loaded with meaning. Try to tell the jury ten things, a lawyer once quipped, and you tell them nothing.

So how do we come up with such an "Controlling Idea"? Simon Sinek, in his TED talk "How great leaders inspire action", couldn't put it more perfectly:

> If Apple were like everyone else, a marketing message from them might sound like this: "We make great computers. They're beautifully designed, simple to use and user friendly. Want to buy one?" "Meh." That's how most of us communicate. That's how most marketing and sales are done, that's how we communicate interpersonally. We say what we do, we say how we're different or better and we expect some sort of a behaviour, a purchase, a vote, something like that. Here's our new law firm: We have the best lawyers with the biggest clients, we always perform for our clients. Here's our new car: It gets great gas mileage, it has leather seats. Buy our car. But it's uninspiring.

> Here's how Apple actually communicates. "Everything we do, we believe in challenging the status quo. We believe in thinking differently. The way we challenge the status quo is by making our products beautifully designed, simple to use and user friendly. We just happen to make great computers. Want to buy one?" Totally different, right? You're ready to buy a computer from me. I just reversed the order of the information. What it proves to us is that people don't buy what you do; people buy why you do it.

##### People buy why you do it.
Sinek further talks about his discovery of a universal pattern called "The Golden Circle" which explains why people tend to believe in something when you start with why. 

![](http://image.slidesharecdn.com/gc100212-13497124030829-phpapp01-121008111025-phpapp01/95/start-with-why-how-to-present-the-golden-circle-5-638.jpg?cb=1415966918)
▶︎ The Golden Circle ([image.slidesharecdn.com](http://image.slidesharecdn.com/gc100212-13497124030829-phpapp01-121008111025-phpapp01/95/start-with-why-how-to-present-the-golden-circle-5-638.jpg?cb=1415966918))

> Here's the best part: None of what I'm telling you is my opinion. It's all grounded in the tenets of biology. Not psychology, biology. If you look at a cross-section of the human brain, from the top down, the human brain is actually broken into three major components that correlate perfectly with the golden circle. Our newest brain, our Homo sapien brain, our neocortex, corresponds with the "what" level. The neocortex is responsible for all of our rational and analytical thought and language. The middle two sections make up our limbic brains, and our limbic brains are responsible for all of our feelings, like trust and loyalty. It's also responsible for all human behavior, all decision-making, and it has no capacity for language.

> In other words, when we communicate from the outside in, yes, people can understand vast amounts of complicated information like features and benefits and facts and figures. It just doesn't drive behavior. When we can communicate from the inside out, we're talking directly to the part of the brain that controls behavior, and then we allow people to rationalize it with the tangible things we say and do. This is where gut decisions come from. Sometimes you can give somebody all the facts and figures, and they say, "I know what all the facts and details say, but it just doesn't feel right." Why would we use that verb, it doesn't "feel" right? Because the part of the brain that controls decision-making doesn't control language. The best we can muster up is, "I don't know. It just doesn't feel right." Or sometimes you say you're leading with your heart or soul. I hate to break it to you, those aren't other body parts controlling your behavior. It's all happening here in your limbic brain, the part of the brain that controls decision-making and not language.

It's clear that in order to effectively reach the target audience, we should start with why. And that's the start of coming up with our story; why is The Things Network building a fully distributed IoT network? Their website, as well as the initial briefing, showed it's **to enable applications and businesses to flourish.**

We know now how to construct or formulate the things we want to say to reach the target audience the most effective way, but this doesn't mean the story should literally start with the reason The Things Network are doing what they do and then carry on to explain how they do it. There's more to it if we want to convey an entire story.

#### The Contour of Communication
In 'Resonate', a book about presenting visual stories that transform audiences written by Nancy Duarte, The Contour of Communication is laid out as a presentation form derived from mythological, literary, and cinematic structures. Though it's technically about presentations, it's wisdom can definitely be applied to storytelling in general.

![](assets/contour-of-communication.png)
▶︎ The Contour of Communication ([cdn.www.duarte.com](http://cdn.www.duarte.com/wp-content/uploads/2013/04/p36-37_contourofcommunication_RGB.jpg))

> Presentations should have a clear beginning, middle, and end. Two clear turning points in a presentation’s structure guide the audience through the content and distinctively separate the beginning from the middle and the middle from the end. The first is the call to adventure—this should show the audience a gap between what is and what could be—jolting the audience from complacency. When effectively constructed—an imbalance is created—the audience will want your presentation to resolve this imbalance. The second turning point is the call to action, which identifies what the audience needs to do, or how they need to change. This second transition point signifies that you’re coming to the presentation’s conclusion.

> Notice how the middle moves up and down as if something new is happening continually. This back and forth structural motion pushes and pulls the audience to feel as if events are constantly unfolding. An audience will stay engaged as you unwrap ideas and perspectives frequently.

##### The Beginning and Call to Adventure
![](http://cdn.resonate.duarte.com/wp-content/uploads/2013/05/the_gap_HD-e1368743900697-300x170.png)
▶︎ The Beginning and Call to Adventure ([cdn.www.duarte.com](http://resonate.duarte.com/lessons-from-myths-and-movies/the-beginning-and-call-to-adventure/))

> The beginning of your presentation is represented by the first flat line of the presentation form. This is where you describe the audience’s ordinary world and set the baseline of what is. You can use historical information about what has been, or the current state of what is, which often includes the problem you’re currently facing.

> You should deliver a concise formulation of what everyone agrees is true. Accurately capturing the current reality and sentiments of the audience’s world demonstrates that you have experience and insights on their situation, and that you understand their perspective, context, and values.

> Done effectively, this description of where your audience currently is will create a common bond between you and them, and will open them up to hear your unique perspective more readily. Audiences are grateful when their contribution, intelligence, and experience are acknowledged.

> Additionally, describing their existing world gives you the opportunity to create a dramatic dichotomy between what is and what could be. Proposing what could be should throw the audience’s current reality out of balance. Without first setting up what is, the dramatic effect of your new idea will be lost.

##### The Middle: Contrast
![](http://cdn.resonate.duarte.com/wp-content/uploads/2013/05/s1.a.jpeg)
▶︎ The Middle: Contrast ([cdn.www.duarte.com](http://resonate.duarte.com/lessons-from-myths-and-movies/the-middle-contrast))

> The middle of a presentation is made up of various types of contrast. People are naturally drawn to contrast, because life is surrounded with it. Day and night. Male and female. Up and down. Good and evil. Love and hate.

> **Your job as a communicator is to create and resolve the tension created by contrast.**

> Building highly contrasting elements into a presentation holds the audience’s attention. Audiences enjoy experiencing a dilemma and its resolution—even if that dilemma is caused by a viewpoint that’s opposed to their own. It keeps them interested. 

> **Oppositional content is stimulating; familiar content is comforting. Together, these two types of content produce forward movement.**

> There are three distinct types of contrast you can build into a presentation:

> - **Content**: Content contrast moves back and forth to compare what is to what could be—and your views versus the audience’s.
- **Emotion**: Emotional contrast moves back and forth between analytical and emotional content.
- **Delivery**: Delivery contrast moves back and forth between traditional and nontraditional delivery methods.

> Contrast is a motif woven throughout this entire book, and is at the heart of communication because people are attracted to things that stand out.

##### Call to Action
![](http://cdn.resonate.duarte.com/wp-content/uploads/2013/05/s1.a1.jpeg)
▶︎ Call to Action ([cdn.www.duarte.com](http://resonate.duarte.com/lessons-from-myths-and-movies/call-to-action))

> The second transition, the call to action, clearly defines what you’re asking the audience to do. Successful persuasion leads to action, and it is important to clearly state exactly how you want the audience to take action. This step in the presentation gives the audience discrete tasks that will help bring the ideas you convey in your presentation to fruition. Once this line is crossed, the audience needs to decide if they are with you or not—so make it clear what needs to be accomplished.

> **Whether a presentation is political, corporate, or academic, the audience consists of four distinct types of people**
**capable of taking action: doers, suppliers, influencers,**
**and innovators.**

![](http://cdn.resonate.duarte.com/wp-content/uploads/2013/05/call_to_action_cropped.png)
▶︎ Four distinct types of people ([cdn.www.duarte.com](http://resonate.duarte.com/lessons-from-myths-and-movies/call-to-action/2-2))

---
##### Conclusion
In order to tell an effective and compelling story that resonates with the target audience the following things need to happen:

- **Start with why.** People don't buy what you do, people buy why you do it. We shouldn't start off by mentioning the benefits of the network, how it's better than certain competitors, or a few performance metrics; we should start with the reason The Things Network exists — to enable applications and businesses to flourish.
- **Call to Adventure.** Without first setting up what is, the dramatic effect of our new idea will be lost. To start with TTN's why we need to first set the stage by succinctly describing the problems around traditional methods of IoT connectivity.
- **Contrast.** People are naturally drawn to contrast. The story itself should continuously switch between what is and what could be.
- **Call to Action.** It is important to clearly state exactly how we want the audience to take action. As there are multiple types of people: doers, suppliers, influencers, and innovators; there should be multiple CTA's in the end.

#### Creating meaningful content
![](https://anabelmoncada.files.wordpress.com/2015/06/pathos-ethos-logos-ii.jpg?w=600)
▶︎ Pathos, Ethos, Logos ([anabelmoncada.files.wordpress.com](https://anabelmoncada.files.wordpress.com/2015/06/pathos-ethos-logos-ii.jpg?w=600))

> "Emotions and belief are masters, reason their servant. Ignore emotion, and reason slumbers; triggers emotion, and reason comes rushing to help" - *Henry M. Boettinger*

##### Ethical appeal (ethos)
- Open-source
- Crowdsourced
- Vision (why)

##### Logical appeal (logos)
- LoRaWAN
	- Low battery usage
	- Long range
	- Low bandwidth
- Secure (encrypted messages)
- Distributed
- Cheap (20% of the cost compared to other products currently on the market)
- Data facts and figures

##### Emotional appeal (pathos)
- Communities
- Existing user/product stories

#### Clustering
To get ideas to messages it's easier to create topics which are mutually exclusive (no overlap) and collectively exhaustive (don't leave anything out).

- Users
	- Stories
	- Communities
- Technology
	- LoRaWAN
	- Secure
	- Distributed
	- Cheap
- Organisation
	- Open-source
	- Crowdsourced
	- Vision (why)

#### Turning information into stories
Stories are easy to remember and repeat. When you present information in an anecdotal form you add an emotional charge. Stories are also a more digestible format for information. We'll be using a shortened version of the The Hero's Journey from the book Resonate (2010).

1. Who, what, where
2. Context
3. Conflict
4. Proposed resolution
5. Complication
6. Actual resolution
7. Most important point

*Below is the high-level overview of our Hero's Journey:*

1. Internet of Things introduction **(who, what, where)**.
> This is where you describe the audience’s ordinary world and set the baseline of what is
2. Issues with 2G/3G/4G and WiFi **(context)**.
> Accurately capturing the current reality and sentiments of the audience’s world demonstrates that you have experience and insights on their situation, and that you understand their perspective, context, and values.
3. A new technology came out, LoRaWAN **(proposed resolution)**.
> Traditional connectivity methods are like a pager, LoRaWAN is like the first mobile phone.
4. But is was centralised and expensive to roll out as an individual **(complication)**.
5. Imagine an Internet of Things network that is created by the people and free and open for everyone to use **(actual resolution)**.
> Proposing what could be should throw the audience’s current reality out of balance.
6. In 2015, as a proof of concept the city of Amsterdam was fully covered in just four weeks.
7. However, the gateways are expensive (€1,000/$1,100) and not that easy to use.
8. The Things Network community then went on a mission to crowdsource a global open and independent Internet Of Things network with gateways only a fraction of the cost (€200) — and they did.
9. The users are in control.
10. The technological benefits.
11. The organisational values (**most important point**. As mentioned before, people don't buy what you do; people buy why you do it).

#### Defining the Call to Action
We know every audience consists of the following people and therefor we know what request matches their interest.

- **Doers** — ask doers to assemble, make decisions, gather, respond, or attempt.
- **Suppliers** — ask suppliers to acquire, fund, support, or provide resources.
- **Influencers** — ask influencers to activate, convert, empower, or promote.
- **Innovators** — ask innovators to create, discover, invent, or pioneer.

These types of people correlate nicely with the participating options of TTN.

- Connect your own device
- Extend the network, setup your own gateway
- Create or join a community, organise or join meetups.

They correspond in the following way.

| Who | What  |
|:--|:--|
| Doers | Connect your own device |
| Suppliers | Extend the network | 
| Influencers, innovators | Communities / meetups |

##### Not just a button  
Dr. Robert Cialdini's Principles of Persuasion are proven factors of influence. The list consists of:

1. **Reciprocity** <br>
People are obliged to give something back in exchange for receiving something.
2. **Scarcity** <br>
People want more of those things they can have less of.
3. **Authority** <br>
People follow the lead of credible, knowledgeable experts.
4. **Consistency** <br>
People like to be consistent with the things they have previously said or done.
5. **Liking** <br>
People prefer to say yes to those that they like.
6. **Consensus** (Social Proof) <br>
Especially when they are uncertain, people will look to the actions and behaviors of others to determine their own.

In the context of our story it's not possible to implement every one of theses principles, but the following are.

- **Authority** <br>
Data facts and figures should help with gaining authority.
- **Liking** <br>
Areas of similarity that you share with the users result in higher conversion, TTN's vision and mission might very well be same as some of their users.
- **Consensus** (Social Proof) <br>
Industry leaders who already participated in certain ways could help persuade users. For instance, "Last year Jurjen, a technical entrepreneur, noticed his city didn't have a community yet. He wondered how beneficial it would be, but after setting one up he saw a burst in LoRa adoption, knowledge sharing, and meetups. Every city could benefit from this. Start or join a community".

## Insights
### Data complexity
Let's take a single row from a single dataset, in the case the hourly aggregated gateway dataset in `csv` (comma serparated values).

| name             | time        | downlink_bytes | downlink_count | id             | lorawan.bandwidth | lorawan.frequency | lorawan.net_id | lorawan.spreading_factor | status_count | uplink_bytes | uplink_count |
| :--------------- | :---------- | :------------- | :------------- | :------------- | :---------------- | :---------------- | :------------- | :----------------------- | :----------- | :----------- | :----------- |
| gateway_counters | 1,52717E+18 |                |                | arjanvanb-gw-1 | 125               | 868300000         | 10             | 12                       |              | 19           | 1            |

#### Size
You've seen the above column, now picture there are **±90 million of them**, per dataset.
Because of the size of the datasets it's not possible to import them into a programming language's memory directly. Instead, you have to spread the file into little chunks called `buffer`'s and manually detect when those buffers become a single column. Once you do, you can pass it on and edit it down the line, without waiting for the rest of the columns (or buffers). This approach is significantly more complex but neccessary.

#### Types
You can't currently see it, but a computer can't distinguish these values from each other as they're all `String`'s, in other words, meaningless text. So to start off it's important that values have their correct type (e.g `Date`, `Number`, `String`, etc.)

#### Non-chronological aggregations
There is basicly a summary of every gateway from every hour but that's unnecessarily detailed. For this project, we'd only need a summary of every day. This means applying addition on bytes and counts but the data isn't chronological, which means 50 million columns down the line that very same day might appear again. This is challenging because you have to keep all aggregations in memory en constantly check whether it already exists partially or completely, of which partially consists of the most checks.

#### Structure
To work with the data dynamicly on the front-end a vastly different structure is required. An example of what an aggregated day would look like can be seen below.

```json
{
  "Thu May 24 2018 23:00:00 GMT+0200 (Central European Summer Time)": {
    "time": "2018-05-24T21:00:00.000Z",
    "downlink_bytes": 1227055,
    "downlink_count": 87668,
    "uplink_bytes": 21880575,
    "uplink_count": 882977,
    "bandwidths": [
      {
        "mhz": 125,
        "spreading_factors": [
          {
            "spreading_factor": 12,
            "uplinks": 250986,
            "downlinks": 473
          },
          {
            "spreading_factor": 7,
            "uplinks": 419014,
            "downlinks": 10089
          },
          {
            "spreading_factor": 11,
            "uplinks": 25531,
            "downlinks": 0
          },
          {
            "spreading_factor": 10,
            "uplinks": 54090,
            "downlinks": 758
          },
          {
            "spreading_factor": 8,
            "uplinks": 59443,
            "downlinks": 3490
          },
          {
            "spreading_factor": 9,
            "uplinks": 59888,
            "downlinks": 45739
          }
        ]
      },
      {
        "mhz": 250,
        "spreading_factors": [
          {
            "spreading_factor": 7,
            "uplinks": 13322,
            "downlinks": 1
          }
        ]
      },
      {
        "mhz": 500,
        "spreading_factors": [
          {
            "spreading_factor": 10,
            "uplinks": 0,
            "downlinks": 7299
          },
          {
            "spreading_factor": 9,
            "uplinks": 0,
            "downlinks": 2254
          },
          {
            "spreading_factor": 8,
            "uplinks": 640,
            "downlinks": 3321
          },
          {
            "spreading_factor": 12,
            "uplinks": 0,
            "downlinks": 3354
          },
          {
            "spreading_factor": 7,
            "uplinks": 0,
            "downlinks": 10890
          }
        ]
      }
    ],
    "frequencies": [
      {
        "frequency": 868300000,
        "uplinks": 131825,
        "downlinks": 2908
      },
      {
        "frequency": 867500000,
        "uplinks": 42029,
        "downlinks": 868
      },
      {
        "frequency": 867700000,
        "uplinks": 65610,
        "downlinks": 911
      },
     // etc ...
    ]
  }
}
```

#### Cross data set combinations
An extra challenge appears when trying to realize the different scales (global, country, city) mentioned in the [data workshop](#workshop). In order to create data per location, the API has to be referenced to match a gateway ID with it's coordinates.

#### Conclusion
To drastically scale down the scope of data pre-processing, the location based scales will not be implemented.

## Product

### Brainstorm
![](assets/books.jpg)
The brainstorm is a series of sketches, some of them inspired by the wide range of data visualisation books available at CLEVER°FRANKE.

These three books served the most as reference:
- **Infographic Designer's Sketchbooks** *by S. Heller & R. Landers*
- **Visual Storytelling** *by R. Klanten, S. Ehmann, F. Schulze*
- **Information Graphics** *by S. Rendgen*

<img src="./sketches/IMG_20180925_103615.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103638.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103641.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103649.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103652.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103700.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103703.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103715.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103725.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103728.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103735.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103737.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103755.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103801.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103809.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103815.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103818.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103823.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103827.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103838.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103909.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103926.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103938.jpg" width="442px"/>

### Top 3 concepts
The above sketches eventually eventually led to the following concepts, they are mostly combinations of multiple sketched out ideas. 

The high-fi concepts in this section initially looked like literal digitized sketches, like this example below, but I recieved the feedback that clients usually can't look further than the sketch itself and it's therefor important to add some visual style to it for their imagination. For clarity sake I'm only showing the visual ones.

<img src="./assets/raw-concept-dashboard.png" width="442px"/>

#### Performance dashboard
The first concept is a safe choice, an interactive analytics dachboard. It represents the current state of The Things Network and is mostly focused on performance metrics.

![](assets/concept-dashboard.png)

#### Packet Traveller
The Packet Traveller is a storytelling and animated experience in which the user follows a single packet through all the network's underlying steps. It's also very convenient that the underlying steps happen to be almost the same as the available data sets (e.g Broker step has a broker data set). Small details like LoRa's [modulation](https://duckduckgo.com/?q=modulation&t=ffab&iax=images&ia=images) wave could also be visually incorporated into this concept.

![](assets/concept-packettraveller.png)

#### Compare
Date & location compare dashoard. It's focused on performance metrics as well, but in a different form.

![](assets/concept-compare.jpg)
![](assets/concept-compare2.jpg)

### Concept presentation
These concepts were then brought to The Things Network to find out which direction we were going to take.
The presentation can be found [here](./attachments/concepts.pdf).

The Packet Traveller was eventually chosen as the concept.

### Ideation
Now that the concept direction has been chosen, it's time to go into how things are going to look and work.

#### Jeremy Raider
![](assets/jeremy-wall.jpg)

I did a small ideation session with a fellow intern at CLEVER°FRANKE.

##### Result
- 'Zooming' effect might be interesting. TTN is a global network but you can create suspense by showing only a city and then gradually zoom out to reveal it's worldwide coverage.
- The encryption step in the Packet Traveller could be a riddle that gradually onfolds. For instance, the value of the packet might be glitched but in the end it shows itself.
- Let the packets move towards gateways on the map to create some sort of marching ants effect.

---

#### Sketches

<img src="./sketches/IMG_20180925_104000.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_103952.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104013.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104018.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104037.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104045.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104050.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104053.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104100.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104106.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104109.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104204.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104206.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104212.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104216.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104230.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104237.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104240.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104250.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104302.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104308.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104316.jpg" width="442px"/>
<img src="./sketches/IMG_20180925_104640.jpg" width="442px"/>

---

### Design 0.1
First version of the design can be found [here](./attachments/design-0.1.pdf).

---

### Design presentation
Now that the first version of the design is finished, it is time to present it to The Things Network. The design presentation can be found [here](./attachments/design-presentation.pdf).

#### API
This was also the moment to further discuss the feasibility of using their API in the front-end, as mentioned before in the [data workshop](#workshop). I  made a small [API specification](./api.md) to make things more concrete. This acted as a guideline when I sat down with the tech-lead on the API. Unfurtunately it became clear that it's for the better to do manual exports of the data and manually update the front-end. This is because their API is subdue to heavy change as they go from V2 to V3. The good news is that as I know what structure and format of the data is required for the front-end, they offered to change the API at a later stage to match that.

#### Time ranges
The [data analysis](#analysis) showed two years worth of aggregated data is stored, but what time range is relevant to show? The full two year? One year? One day? After a small discussion, TTN finds that the last month and last three months are the most interesting to visualise.

#### Design feedback
- Packet Traveller should contain less steps. Router, Broker, and Handler are unnecessarily detailed and should together just become 'The Things Network'.
- TTN's servers could be displayed on the map as well, as they have physical locations.
- When explaining the gateway, add a link to the gateway marketplace.

---

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

---

### Design 0.2
Second version of the design can be found [here](./attachments/design-0.2.pdf).

#### Design decisions:
- Less steps for the packet traveller (how it works). Router, broker, and handler have been removed and together became TTN.
- The site is split into three parts, how it works, coverage, and metrics. Now it’s less monolithic and easier to reason about.

#### Techical decisions:
- Still depends on NOC for the mapping of the gateway locations in coverage (lat, long).

---

### Expert review
<div id='expert-review2'/>

Like the previous expert review, I joined the design review at CLEVER°FRANKE.

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
- Make the map and the content more complementary, they feel out of touch as the content is quite literally an overlay on top of the map. You'd want to tell the story from inside the map.

---

### Design 0.3
> **NOTE:** version 0.3 is completely revamped based on a new research direction which can be found [here](#persuasive-storytelling).

Third version of the design can be found [here](./attachments/design-0.3.png). There are multiple moments where text scrolls over a fixed component/visualisation but because a static design can't show this, some screens are duplicated with the changes that would normally fly over.

---

### User testing
We want to find out if the end-product is the answer to the design challenge.

In her Moderating Usability Tests article, Jen Romano Bergstrom notes that choosing the best moderating technique for your test depends on your session goals. Because our goal is understanding participants’ thoughts as they occur and as they attempt to work through issues they encounter, 'Concurrent Think Aloud' is the best approach.

Concurrent Think Aloud (CTA) is used to understand participants thoughts as they interact with a product by having them think aloud while they work. The goal is to encourage participants to keep a running stream of consciousness as they work.

**[explain multiple choice]**

#### Goals
How can an interactive and storytelling data driven experience **convince** early adopter and early majority Internet of Things developers who are interested yet unfamiliar with LoRaWAN, of the **credibility**, **impact**, and **underlying technology** of the network so they are **eager to participate**?

- Does the flow of the story make sense to the user? Is there confusion along the way?
- Does the user have a correct mental model about LoRaWAN? And the differences with traditional connectivity methods?
- Does the user feel confident to use to network? What are the doubts?

#### The test

##### Multiple choice

1 = Strong 👎

5 = Strong 👍

| Question | 1 | 2 | 3 | 4 | 5 |
|:--|:--|:--|:--|:--|:--|
| Do you have a basic understanding of LoRaWAN? |  |  |  |  |  |
| Does TTN feel like a stable and credible platform?  |  |  |  |  |  |
| How interested are you to try to connect your own device through TTN? |  |  |  |  |  |
| How interested are you to setup your own gateway? |  |  |  |  |  |
| How interested are you to participate in communities (e.g. meetups, sharing your creations)? |  |  |  |  |  |

##### Open questions
1. Why are you more interested in doing x than y/z?
2. Could you explain how TTN roughly works?

#### Fabian van der Sluijs
> Co-founder and curator at FIBER, Initiator of Creative Coding Utrecht (CCU), Lab manager Sensor Lab.

##### Walkthrough

- And first, it appeared the circle size is relative to its adoption/usage. But but once 3G/4G appeared it became clear it's about the connectivity range.

- The global coverage map could be made stronger by adding metrics such as how many countries or cities are covered.

- The fact that TTN is secure is a bit subtle throughout the story, it could be made more apparent. 

- 'How it works' has too much text, it could be more like devices where it's visually supported. The TTN step should feel like the step where network processing happens.

- What role does the community have? This isn't clear enough.

- I want more details on the ways of participation.

##### Multiple choice
| Question | 1 | 2 | 3 | 4 | 5 |
|:--|:--|:--|:--|:--|:--|
| Do you have a basic understanding of LoRaWAN? |  |  |  | x |  |
| Does TTN feel like a stable and credible platform?  |  |  |  | x |  |
| How interested are you to try to connect your own device through TTN? |  |  |  | x |  |
| How interested are you to setup your own gateway? |  |  | x |  |  |
| How interested are you to participate in communities (e.g. meetups, sharing your creations)? |  |  |  | x |  |

##### Open questions
1. Why are you more interested in doing x than y/z?
> I'm very interested in smart cities and what role the users have in it. I'm therefor interested the most in the community aspect. 

2. Could you explain how TTN roughly works?

Fabian seemed to have a correct mental model of how TTN works.

#### Design changes based on Fabian
![](assets/change-earth.png)
Added number of countries and cities covered by TTN to better grasp it's impact. Left is old, right is new.

![](assets/change-howitworks1.png)
![](assets/change-howitworks2.png)
Attempts to make 'How it works' more visual.

![](assets/change-howitworks3.png)
Overview of the choosen new visual style for 'How it works'. Left is old, right is new.

![](assets/change-metrics.png)
The metrics from the previous designs have made a comeback to support the story. The uplinks/downlinks visualisation shows the global recieved data from the past three months while explaining uplinks/downlinks. The bandwidth vs. spreading factor visualisation shows you can setup your gateway to be more reliable or faster.

#### Daan Rongen
> Intelligent Environments Designer

- De starting subtitle isn't catchy enough for me.
- At first in the connectivity approaches it isn't clear that the circular size means range, but that's okay because it becomes clear when the next technology appears.
- Connectivity approaches should only be about power usage, range, and cost as is shown in the chart. The pros and cons list other variables but they might be better somewhere else.
- What does 'How it works' entail? The protocol or the community? Perhaps a subtitle would help.
- As a maker, I want to see how big the LoRaWAN devices are and the technical specifications.
- I don’t immediately understand the uplinks/downlinks chart without reading the text next to it. What are uplinks/downlinks?
- Bandwidth vs. Spreading factor is a bit hard to understand. What is congestion?
- In 'The Things Network' step of 'How it works', I'm wondering if TTN can see my data? Is it secure?
- Vision doesn't feel like a vision. They visually look like points but they are sentences. It's also more like an approach than a vision.
- Call to Action's are not predictable. What will I see when I click one?

##### Multiple choice
| Question | 1 | 2 | 3 | 4 | 5 |
|:--|:--|:--|:--|:--|:--|
| Do you have a basic understanding of LoRaWAN? |  |  |  |  | x |
| Does TTN feel like a stable and credible platform?  |  |  |  | x |  |
| How interested are you to try to connect your own device through TTN? |  |  |  |  | x |
| How interested are you to setup your own gateway? |  |  | |  | x |
| How interested are you to participate in communities (e.g. meetups, sharing your creations)? |  | x |  | |  |

##### Open questions
1. Why are you more interested in doing x than y/z?
> I'm very curious about experimenting with LoRaWAN. When I do, I'd probably go all the way and get my own gateway as well. Communities, however, are probably too superficial for me. 

2. Could you explain how TTN roughly works?

Daan seemed to have a correct mental model of how TTN works.

#### Design changes based on Daan

![](assets/change-subtitle.png)
Sparking more curiosity with an improved subtitle.

![](assets/change-device.png)
The device step now contains much more info, including a schematic from one of TTN most popular LoRA devices.

![](assets/change-vision.png)
Vision now feels more like a vision rather than bullet points.

![](assets/change-cta.png)
A lot more context for the call to action's. Design rationale will go into greater detail about this.

*Small changes:*
- Rewrite 'Bandwidth vs. spreading factor' to make it easier to comprehend.
- Change label of 'Uplinks/downlinks' to 'Recieved data packets'
- Add "Your are in control of your data with privacy through end-to-end encryption" in the TTN step of 'How it works' to emphasize security.

#### Wilco Thomassen
> Back-end Developer, ubicomp enthusiast.

- I didn't immediately grasp that the IoT global market visualisation is a future prediction.
- The messages on the map are a bit long, I want to know the key points.
- Same for the text in 'How it works', some highlighting could help me.

##### Multiple choice
| Question | 1 | 2 | 3 | 4 | 5 |
|:--|:--|:--|:--|:--|:--|
| Do you have a basic understanding of LoRaWAN? |  |  |  |  | x |
| Does TTN feel like a stable and credible platform?  |  |  |  | x |  |
| How interested are you to try to connect your own device through TTN? |  |  |  |  | x |
| How interested are you to setup your own gateway? |  |  |x |  | |
| How interested are you to participate in communities (e.g. meetups, sharing your creations)? |  | x |  | |  |

##### Open questions
1. Why are you more interested in doing x than y/z?
> I play around with sensors a lot so I'm the most interested in connecting a device of mine over The Things Network. I'm less about the meetups and maintaining gateways myself.

1. Could you explain how TTN roughly works?

Wilco seemed to have a correct mental model of how TTN works.

#### Design changes based on Wilco.

![](assets/change-future.png)
Clearly distinguish the present and future 

![](assets/change-highlighting.png)
Add highlighting throughout the page. This is done in more places then shown here but is left out of this section to avoid overly large screenhots.

## Sources

Bergstrom, J. (2013, April 2). Moderating Usability Tests. Retrieved October 23, 2018 from https://www.usability.gov/get-involved/blog/2013/04/moderating-usability-tests.html

Burrus, D. N.D. The Internet of Things Is Far Bigger Than Anyone Realizes. Retrieved April 19, 2018 from https://www.wired.com/insights/2014/11/the-internet-of-things-bigger/

Ceros, INC. (2016, May 25). Visual Storytelling: A Primer for Digital Designers. Retrieved October 2, 2018 from https://www.ceros.com/originals/visual-storytelling-primer-digital-designers/

Cialdini, R. (2012, November 26). Principles of Persuasion. Retrieved October 10, 2018 from https://www.influenceatwork.com/principles-of-persuasion/

Duarte, N. (2010). Resonate, present visual stories that transform audiences. New Jersey, Hoboken: John Wiley & Sons Inc.

Giezeman, W. N.D. The Things Network. Retrieved September 23, 2018 from https://www.kickstarter.com/projects/419277966/the-things-network

N.A. (2017, December 20). Mark Weiser. Retrieved April 19, 2018 from https://en.wikipedia.org/wiki/Mark_Weiser

N.A. The Things Network. Building a fully distributed Internet of Things infrastructure. Retrieved April 19, 2018 from https://www.thethingsnetwork.org/

N.A. (2018, September 19). Diffusion of innovations. Retrieved September 23, 2018 from https://en.wikipedia.org/wiki/Diffusion_of_innovations

Roland, C. (2009). Designing Connected Products. Retrieved April 19, 2018 from http://www.designingconnectedproducts.com/

Sinek, S. (2009, September). How great leaders inspire action [Video]. Retrieved October 2, 2018 from https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action

Thompson, T. & Baran, N. (1988, November). "The NeXT Computer". Retrieved May 10, 2018, from http://simson.net/ref/NeXT/byte_article.html

Wayne, W. (2018, August 29). Diffusion of Innovation Theory. Retrieved September 24, 2018, from http://sphweb.bumc.bu.edu/otlt/MPH-Modules/SB/BehavioralChangeTheories/BehavioralChangeTheories4.html

Weiser, M. (1991, September). The Computer for the 21st Century [PDF]. Retrieved April 19, 2018 from 
https://www.lri.fr/~mbl/ENS/FONDIHM/2012/papers/Weiser-SciAm91.pdf

Westbrook, A. (2014, Februari 26). Storytelling + Design Thinking. Retrieved October 2, 2018 from https://medium.com/story-design-for-nonfiction/storytelling-design-thinking-ed914117f7c1
