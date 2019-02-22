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
EUR Euro
USD	US dollar
JPY	Japanese yen	
BGN	Bulgarian lev	
CZK	Czech koruna	
DKK	Danish krone	
GBP	Pound sterling	
HUF	Hungarian forint	
PLN	Polish zloty	
RON	Romanian leu	
SEK	Swedish krona	
CHF	Swiss franc
ISK	Icelandic krona	
NOK	Norwegian krone	
HRK	Croatian kuna	
RUB	Russian rouble	
TRY	Turkish lira	
AUD	Australian dollar	
BRL	Brazilian real	
CAD	Canadian dollar	
CNY	Chinese yuan renminbi	
HKD	Hong Kong dollar	
IDR	Indonesian rupiah	
ILS	Israeli shekel	
INR	Indian rupee
KRW	South Korean won
MXN	Mexican peso	
MYR	Malaysian ringgit	
NZD	New Zealand dollar	
PHP	Philippine peso	
SGD	Singapore dollar	
THB	Thai baht
ZAR	South African rand

