// make reference to retext

'use strict';

/*

Input: LONG STRING

Transformation #1: build a concrete syntax tree (NLCST nodes) [parse-latin]
Transformation #2: sentiment analysis of nodes

gameplan:
(1) figure out if the sentiment analysis really needs the CST before analyzing
(2) rewrite parser
(3) write tests
(4) pass tests
(5) inject into sentiment-api test branch
(6) add to tests
(7) pass tests
(8) benchmark
(9) PR
(10) see how your solution could be helpful to wooorm (generator function? cleaner, more idiomatic api?)


*/
