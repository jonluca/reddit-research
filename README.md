# Reddit Naive Bayes Filter

We will attempt to locate as much spam as possible from various subreddits to train our model. This will be used within a reddit bot to flag potentially bad users or psots.

## Format

The filter reads in two files - spam.txt and good.txt, which is a newline-delimited list of spam post titles and valid post titles, correspondingly. It'll train the model using those titles, and then will run it against test files spam-test.txt and good-test.txt which will verify the validity of our model. 


## Authors

Currently being written by /u/JonLuca, /u/Clearly-Coder, and /u/BB-r8
