# cash
**Table of Contents**

- [👩‍💻 Set-up](#set-up)
- [🏃‍♀️ Usage](#usage)



## 👩‍💻Set-up

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
You need NodeJS if not do the following section

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

## 🏃‍♀️Usage



```sh
❯cd /path/to/workspace/3-musketeers/cash/bin
```
Here is the list of command you can use
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

