# NOC API
This document covers what NOC should be able to do to make the application run on live data instead of manually exported data.

## Minimal
The minimal required version only consists of aggregated global data from a single time range (e.g one year). This time range (`{period}`) is up for debate.

Potential `{period}` options (only one for the minimal mvp):

- Past two years
- Past year
- Past month
- Past week
- Today

+++

### `/gateway`
Global gateway metrics from the past `{period}`.

| Key                        | Value    | Description                                                                                                                     |
| -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `uplinks`                  | `Number` | Total uplinks                                                                                                                   |
| `downlinks`                | `Number` | Total downlinks                                                                                                                 |
| `online_during_period`     | `Number` | Gateways online during `{period}`                                                                                               |
| `online_ratio`             | `Number` | % of online gateways vs. Total gateways                                                                                         |
| `99%_online_during_period` | `Number` | Amount of gateway with a 99% uptime                                                                                             |
| `frequencies`              | `Array`  | `Object` for every frequency: `{frequency: Number, uplinks: Number, downlinks: Number}`                                         |
| `bandwidths`               | `Array`  | `Object` for every bandwidth: `{mhz: 125, spreading_factors: [{spreading_factor: Number, uplinks: Number, downlinks: Number}]}` |

Example response:

```json
{
	uplinks: 400000,
	downlinks: 10000,
	online_during_period: 3000,
	online_ratio: 60,
	online_99%_of_the_time: 1000
	frequencies: [
		{
			frequency: 863000000,
			uplinks: 4000,
			downlinks: 1000
		},
			frequency: 864000000,
			uplinks: 4000,
			downlinks: 1000
		},
		...
	]
	bandwidths: [
		{
			mhz: 125,
			spreading_factors: [
				{
					spreading_factor: 7,
					uplinks: 2000,
					downlinks: 500
				},
				{
					spreading_factor: 8,
					uplinks: 2000,
					downlinks: 500
				},
				...
			]
		},
		{
			mhz: 250,
			spreading_factors: [
				{
					spreading_factor: 7,
					uplinks: 2000,
					downlinks: 500
				},
				{
					spreading_factor: 8,
					uplinks: 2000,
					downlinks: 500
				},
				...
			]
		},
		...
	]
}
```

+++

### `/broker` & `/handler`
Broker/handler metrics from the past `{period}`.

| Key       | Value    | Description                                                               |
| --------- | -------- | ------------------------------------------------------------------------- |
| `apps`    | `Number` | Amount of (unique) applications                                           |
| `devices` | `Number` | Amount of (unique) devices                                                |
| `ids`     | `Array`  | `Object` for every ID: `{id: String, uplinks: Number, downlinks: Number}` |

Example response:

```json
{
	apps: 110,
	devices: 2000
	ids: [
		{
			id: 'tnn-broker-eu',
			uplinks: 4000,
			downlinks 1000
		},
		{
			id: 'tnn-broker-asia-se',
			uplinks: 4000,
			downlinks 1000
		},
		...
	]
}
```

+++

## Optional: location segregation
Some metrics are more appealing in the context of a different scale, for instance, a user might be interested in the amount of gateways in their country/city instead of only seeing it globally.

### `/gateway`, `/broker`, `/handler`
Instead of a single object which represents the global state of The Things Network, the metrics would now be split up per country (or even city) to let the user decide in what context they want to see the metrics in.

```json
{
	...
	netherlands: {
		...	
	},
	germany: {
		...
	}
	...
}
```

+++

## Optional: time segregation
Breaking down the uplinks and downlinks will make it possible to see trends over time.

### `/gateway`, `/broker`, `/handler`
Instead of aggregating uplinks and downlinks to a single number within a time range, they would now be stored at a certain interval. For instance: the total of every month if the time range is one year.

