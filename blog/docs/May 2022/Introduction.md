#Day 2/100

## Welcome!
Watch this [3 min intro ](https://www.youtube.com/watch?v=inN8seMm7UI)to Google Colab before we go on.

Sign in on your laptop, Then open a new Colab Notebook (File --> New Notebook) and follow along. Don't worrry if you get lost. You can't break Google Colab. You can also work here.

Over the course of the next hundred days, we will try to cover as much data science as we can. I'll call this endeavour hundred days of AI with Emad so that it has a catchy buzz name. You will need no background knowledge.

 I will assume you are proficient in English and are **typing** (never copy pasting, this way you develop muscle memory) the code I write as we go along.


Whenever you find time, click the setting icon in the top right to adjust this page's theme for yourself.
(To run this text cell, first click on this cell then press Shift + Enter)


```python
# This is a python code cell. 
# Anything following a hashtag is a comment in python
# To run this code cell, click in it and press shift + enter
# Or by clicking the play button
2 + 2
```




    4




```python
print("That's",4-1)
print("Quick maths")
```

    That's 3
    Quick maths


# Before we begin

1. We will put [on nice music](https://www.youtube.com/watch?v=Q72vhRgr_dI)



```python
good_music = True
good_code = True
good_vibes = True
good_chai = True
print("Emad is happy? ", good_music and good_code and good_vibes and good_chai)
```

    Emad is happy?  True



```python
good_music = False
good_code = False
good_vibes = False
good_chai = True
print("Emad is happy? ", good_music and good_code and good_vibes or good_chai)
```

    Emad is happy?  True


Text sections are for explanations. Explanations are quite important in Data Science. More important than the code itself.





Let's explain what have you done so far here in this text cell: 


1.   You ran a text cell. Text cells are just text (and poetry is just text too), in a way Google Colab can be seen as Google Docs but with code cells in between.
2.   You ran a code cell. A code cell executes python code. You ran code cells that printed string (stuff inside quotes usually text). 

More importantly, you ran a multiline python code on a powerful computer in Google's warehouses from wherever you are sitting right now.  

If you know how to run a cell in and are logged into Google Colab, then we are good to go!









###Goal:

**The main point of this tutorial is to get you comfortable in Google Colab and set the stage for why we need python.**


We will first do a quick dive of how to run python code in Google Colab by running the next few cells. You are not expected to understand anything except how to run a code cell. 


**At any point, to restart, click on Runtime --> Restart Runtime**

This is the equivalent of restarting the computer and it will be as if no cell was executed. You will lose all computation. You will have to shift + enter (run) any cell you previously run.


## Can you print? Quick check

Down, below the identitcal example cell, you can see an empty code cell. Print your name in it by
writing:

```
[ ] print("Whatever your name is")
```

and then running the cell.


```python

```

Great job. You are now a coder. If you want to know how exactly, continue reading. Otherwise, jump to the first project and start runnning the cells.

## Time to watch some videos

We are here in this new environment and this will take some getting used to but lets take it once step at a time. First, familiarize yourself with Google Colab. Watch the video at the top if you didn't already. 

Before we proceed let's see how python code gets executed in the Terminal on Mac/Linux computers. I want you to see [this](https://www.youtube.com/watch?v=I2wURDqiXdM) 6 min intro to Python. I don't want you to understand anything in it, I just want you to see someone executing python code in the Terminal. This will help you understand what Google Colab is and why we will use it.

I am going to assume you learnt this from the videos.


1. The person in the first video (the video at the top) introduced us to a platform that allows us to run blocks of python code, instead of just one line of code or, on other extreme, a whole file of code.   

2. The person in the second video had Terminal in Mac/Linux [open](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) and the Python Interpretor launched (by typing `python` in the Terminal shell) and was typing away python commands.



## How to run python code in the python interpretor on a local computer



You can do this by searching for Terminal, [launching](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) it and typing `python` after the `$` sign to launch the python interpretor. In my case, after double clicking on Terminal application to launch it, I would type the following to launch the python interpretor.


```
# (base) Emads-MacBook-Pro:~ emadsiddiq$ python
```
Or alternatively, the desired version of python. For example:

```
# python3
```




2.   This is the screen the first in the first video had before he started typing python code:


```
# Python 3.7.10 (default, Feb 26 2021, 10:16:00) 
[Clang 10.0.0 ] :: Anaconda, Inc. on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```

This means the python interpreter is launched, running Python 3.7.10 and you can type single line python code after `>>>`


Here is something you might do but go ahead and have fun 

```
# >>>(base) Emads-MacBook-Pro:~ emadsiddiq$ python
Python 3.7.10 (default, Feb 26 2021, 10:16:00) 
[Clang 10.0.0 ] :: Anaconda, Inc. on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> print("Hello Emad!")
Hello Emad!
>>> 2+2 
4
>>> 4-1
3
>>> print("quick maths")
quick maths
>>> 
```

##Why do we use Google Colab?

***where we learn about the blessing that is jupyter notebooks***

In the old days (which I wasn't there for), you could either enter single commands into this
python interpretor in the Terminal which is pretty boring or write a whole *document* of python code. You would then run this whole list of commands by first saving the code with a .py extension and executing the whole file.


This method doesn't work very well with data science. We often want to do things incrementally and be able to trace our steps. Go back, 
run a specific part again and many other transgressions. We can't just write code in bulk, because we won't be doing ourselves any favours.


For the sake of curiousity, I will show you how you could write python code in any text editor on your computer, save it as a python file and run it in your Terminal.

## How python runs on a local computer 


Your computer runs an operating system. Your operating system runs a program that much like an actual translator, the python interpretor translates your python code that looks like English, to `1010101010`'s that computers understand. 

We now see how we can write and run a python code file on Mac. Please Google if you are curious for other operating systems or get stuck. Otherwise, just move on, we have Google Colab so you don't have to worry about these things.

We first write python code in some text editor:

`emad.py`
```
#Content of a file saved as emad.py
print("Hello Emad") 
print("This is code")
print(2+2+3) 
```



```
Save this file as emad.py somewhere.
```



```
Open Terminal and change directory folder where you saved emad.py. If you saved it on Desktop you could do 
cd ~/Desktop 
Learn terminal commands if you are interested. I'll teach them as they come along later.
```
This is what gets outputted when we run emad.py

```
# Emads-MacBook-Pro:~ emadsiddiq$ python emad.py
Hello Emad
This is code
7
```





## How to run terminal commands in Google Colab?

***Where we see that a code cell by default executes blocks of python code, we can use a ! in front of terminal commands to access the terminal.***

Data Science is an exploration, you learn from the process and often there is no specific end goal.

For this purpose jupyter notebooks were invented and now Google has graciously offered us this platform for free which comes with a GPU, a very expensive piece of equipment, all in the cloud. 

So think of this window as a very powerful computer, somewhere in Google's massive computers, that will be helpful when our computers
are not able to deal with the massive amounts of data.

##Tell me more about this computer in the cloud where [Jupyter Notebook](https://en.wikipedia.org/wiki/Project_Jupyter)'s run courtesy Google



Well, it's basically like any other unix computer like a macbook or any linux computer. You have access to the all powerful Terminal. All you have to do, for any command that you would otherwise enter in the Terminal like `cd` change directory or `pwd` print working directory or `ls` to list the files in the current directory, just **precede it with an exclamation mark so that the code cell knows this isn't python code but shell code meant for the terminal.**

For example, let's launch the python interpretor, which to launch on our local computer, we would have had to open Terminal and enter `python`.
Now we just precede python with an exclamation mark so that the cell knows this command is for the terminal.

For example you could launch the python interpretor. 

It doesn't, however, work on Google Colab so just click pause icon after you run the next cell because it will keep on running forever.



```python
!python3
```

    Python 3.7.11 (default, Jul  3 2021, 18:01:19) 
    [GCC 7.5.0] on linux
    Type "help", "copyright", "credits" or "license" for more information.
    >>> print(fd
    ... 
    
    KeyboardInterrupt
    >>> 
    KeyboardInterrupt
    >>> ^C


Where am I working now, print working directory (pwd)


```python
!pwd
```

    /content


List the files in this folder


```python
!ls
```

    sample_data


Change directory to sample data


```python
!cd sample_data
```

## Why is this good for us?

Over the course of the next 100 days, we will use the power of computation to do amazing things with data to understand the world around us. 

Sometimes, we will need code to do great things. Sometimes we will need words. When we need words, we will create a textbox like the one you are reading right now. 

When we need code, we will add a code box to write python code. When you execute a code box (either by pressing the play button or using shift + enter shorcut), the python code in it gets executed and a number appears next to the box like so.




```python
print('Hello World!') #Anything after a hashtag is a comment in python
                      #We will slowly learn about python
                      #Don't worry 
                      #Just like with any language
                      #Time will be our friend
```

    Hello World!


# A very brief history lesson

***Where we appreciate the amazing times we live in***

Everyone has different questions. My hope is you see me do enough data science explorations to be able to use these tools in a [domain](https://data.berkeley.edu/academics/data-science-undergraduate-studies/data-science-major/requirements-domain-emphases-1) that you care about.

 Naturally, to implement our thinking, we will need some kind of language. We will use the preciseness that mathematics affords us because it is unambigous and because math and computation is probably the best match made in history.

Let's first narrate the story of math so that you know your special place in it. Imagine all of mathematics that has been invented since the beginning of time did not exist. 




***slight digression begins***

 [ Read ](https://www.maa.org/external_archive/devlin/LockhartsLament.pdf)a mathematician's (famous) lament.

 Mathematics has been undertaken for a very very long time. To put this in perspective, the geometry you studied in school was mostly explored by Euclid in 300 BC. That's so many lifetimes of so much math but not even a single calculator besides like abascus and other mechanical stuff. In fact, algorithms themselves have been explored since time immemorial. 

According to the Algorithms textbook by Vazirani, Papadimitriou and Dasgupta, the word algorithm comes from the arabic name al-Khwarizmi, a man who lived in Baghdad in the 9th century. Al-Khwarizmi laid out the methods for adding, multiplying, dividing, extracting square roots and even calculating the digits of $\pi$. As they put it "These procedures, were precise, unambigous, mechanial, efficient, correct - in short, they were algorithms, a term coined to honor the wise man, after the decimal system was finally adopted in Europe, many centuries later."

They further go on "Al-Khwarizini's work could not have gained a foothold in the West were it not for the efforts of one man: the 13th century Italian mathematician, Leonardo Fibonacci, who saw the potential of the positional system and worked hard to develop it further and propagandize it."

To be a part of this amazing historical tradition. Let's do two things by the end of this tutorial. 


1.   Implement an algorithm than calculates the first n terms of [the Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number)
2.   Implement Euclid's algorithm for finding the [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) of two numbers. 

I'll tell you about them soon.

***slight digression ends***

Now stop furthering this terrible thought of imagining math didn't exist. Suddenly, you precipitate into 2021 and I give you a laptop with access to a super computer and all the data in the world to answer any question you can ask. How do you search for answers? More importantly, how do you know how to ask your question? Even more importantly what questions do we ask?






 Math, specifically, linear algebra, teaches you how to work with data that looks like matrices (is in a tabular form).

But need some way of thinking about computation and math reasonably and unambiguously.



Let's build our thinking from the very ground up. We will be trying to build the tools that will help us implement two algorithms, one from 300 BC, the other from a couple of centuries ago.



Let's go ahead and frame the two problems.

## The Fibonacci sequence 

***Where I explain what the fibonacci sequence is***






In the Fibonacci sequence the first two terms are 0 & 1. All subsequent terms are the sum of the previous two terms, so we have the first 6 terms of the Fibonacci sequence as:


```
# 0, 1, 0+1, 1+1, 2+1, 3+2
```


which is the same as
``` 
0, 1, 1, 2, 3, 5
``` 

## Euclid's algorithm 


***Where I explain what Euclid's algorithm is***


```Euclid's Rule: If x and y are positive integers with x >= y then gcd(x,y) = gcd( x mod y, y)```


Euclid's Rule says that:

1) 
```If x and y are positive integers with x >= y```  

If we have two numbers greater than 0 and one number (lets say x) is greater or equal to the other (lets say y)




2) then 
```gcd(x,y) = gcd(x mod y, y)```


Then the greatest common divisor of those two numbers (x & y) is the same as the gcd of (x mod y & y)

* x mod y is another way of saying the remainder when you divide the number on the left side of "mod" (i.e. x) by the number on the right side of "mod" (i.e. y)


* For example: 

```
if x is 15, y is 2, then x mod y = 15 mod 2 = 1 because 15/2 leaves 1 remainder
```
```
if x is 9, y is 3, then x mod y = 9 mod 3 = 0 because  9/3 leaves 0 as remainder
```

I think it is a good place to stop. We will start the next notebook with a dive into python in the hopes of designing algorithms for to implement these two algorithms. Till then, try to design algorithms in plain English for these two problems. See you next time :)

### [Link to second lesson](https://colab.research.google.com/drive/1epy2DOZzffvckO3d9c0MgR2OBBjUvVVW?usp=sharing)

### References:


1.   Composing Programs at [composingprograms.com](https://composingprograms.com) available under a Creative Commons Licence.
2.   Algorithms by Christos Papadimitriou, Sanjoy Dasgupta, and Umesh Vazirani referenced for sake of historical accuracy.

