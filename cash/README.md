# cash
**Table of Contents**

- [👩‍💻 Set-up](#set-up)
- [🏃‍♀️ Usage](#usage)
- [💰 Currencies available](#currencies)



## [👩‍💻Set-up](#set-up)

Just do the following instructions to be able to use correctly the library

<ol>
<li>
Fork the project via github
</li>

<li>Clone your forked repository project `https://github.com/YOUR_USERNAME/3-musketeers`

```sh
❯cd /path/to/workspace
❯git clone git@github.com:YOUR_USERNAME/3-musketeers.git
```
</li>	
<li>
You will need NodeJS if not do the following section

[Download and Install Node Js](https://nodejs.org/en/download/)
</li>
<li>

```sh
❯cd /path/to/workspace
❯npm install 
#it will install all the specified packages
```

</li>
</ol>

## [🏃‍♀️Usage](#usage)



```sh
❯cd /path/to/workspace/3-musketeers/cash/bin
```
Here is the list of command you can use
<ol>
<li>

```sh
❯cd /path/to/workspace/3-musketeers/cash/bin
❯node index.js
#It will convert 1 USD to Euros (EUR), Sterling Pounds(GBP) and Yens (JPY) by default)
```
</li>
<li>

```sh
❯cd /path/to/workspace/3-musketeers/cash/bin
❯node index.js <amount> <from> <to> 

#Example
❯node index.js 10 CAD USD
#It will convert 10 Canadian Dollars(CAD) in American Dollars (USD)
#You can add more currencies
#Example
❯node index.js 10 CAD USD NZD SEK
#It will convert 10 Canadian Dollars(CAD) in American Dollars (USD), New Zealand Dollars (NZD) and Swedish Krona (SEK)
```
</li>
<li>

```sh
❯cd /path/to/workspace/3-musketeers/cash/bin
❯node index.js -s <currency>
#It will define the current currency to convert
#Example
❯node index.js -s NZD
#The default currency will now be New Zealand Dollars
```
</li>
<li>

```sh
❯cd /path/to/workspace/3-musketeers/cash/bin
❯node index.js -s <currency> <currency> 
#It will set the current currency to convert and set in which currency it will be converted
#Example
❯node index.js -s  NZD SEK GBP
#The default currency will now be New Zealand Dollars and it will be converted in Swedish Krona (SEK) and Sterling Pounds(GBP)
```
</li>
</ol>

## [💰 Currencies available](#currencies)

Here is the list of the currencies avaiaibles from the [API](https://api.exchangeratesapi.io/latest)
EUR Euro<br/>
USD	US dollar<br/>
JPY	Japanese yen	<br/>
BGN	Bulgarian lev	<br/>
CZK	Czech koruna<br/>	
DKK	Danish krone	<br/>
GBP	Pound sterling	<br/>
HUF	Hungarian forint	<br/>
PLN	Polish zloty	<br/>
RON	Romanian leu	<br/>
SEK	Swedish krona	<br/>
CHF	Swiss franc<br/>
ISK	Icelandic krona	<br/>
NOK	Norwegian krone	<br/>
HRK	Croatian kuna	<br/>
RUB	Russian rouble	<br/>
TRY	Turkish lira	<br/>
AUD	Australian dollar	<br/>
BRL	Brazilian real	<br/>
CAD	Canadian dollar	<br/>
CNY	Chinese yuan renminbi	<br/>
HKD	Hong Kong dollar	<br/>
IDR	Indonesian rupiah	<br/>
ILS	Israeli shekel	<br/>
INR	Indian rupee<br/>
KRW	South Korean won<br/>
MXN	Mexican peso	<br/>
MYR	Malaysian ringgit	<br/>
NZD	New Zealand dollar	<br/>
PHP	Philippine peso	<br/>
SGD	Singapore dollar	<br/>
THB	Thai baht<br/>
ZAR	South African rand<br/>

