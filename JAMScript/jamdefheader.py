# 
# Create a jamdef header class.
# Populate all the parameters of the command line
#

import re
from headerparser import headerparser

# 
# parse the following jamdef header..
# jamdef return_type function_name(param_list) {
#
# Use mainpat to match A {Optlist} (B) C
# A includes jamdef return_type function_name - check if a pointer is there
# if so, split and then first two are jamdef return_type (pointer)
# last is function_name
# if not, still the same but no pointer..
#
# B param_list - a little tricky - iterate on parameter pattern
# check for pointer (use pointerpat on each param)
#
# C { - very easy!
# Optlist is actually optional!


class jamdefheader:
	def __init__(self, li):
		self.head = None
		self.cline = li.strip()

	def parseheader(self):
		# initialize an instance of a generic parser
		self.head = headerparser(self.cline)
		# parse the line.. now the values are loaded properly
		self.head.parse()
		
		# TODO: do something with the header options

		# TODO: Parse the body of the function.. check for parameter use
		# TODO: Check for JavaScript use... if it is not JavaScript, we need to report ERROR
		

	def getreturntype(self):
		return dict(type=self.head.rettype, ispointer= not self.head.isrettypevalue)

	# build a C version of the header...
	def makecheader(self):
		return self.head.makecheader()

	# build the 'call_user_def' function call..
	def makeuserdefcall(self):
		ostr = "call_user_def(app, "
		ostr = ostr + "\"" + self.head.funcname + "\""
		fmt = "\""
		pargs = ""
		count = 0
		if len(self.head.params) == 1:
			return ostr + ", NULL);"
		ostr = ostr +", "
		for p in self.head.params:
			count = count + 1
			if count == 1:
				continue
			if p["type"] == "int":
				fmt = fmt + "i"
			elif p["type"] == "double":
				fmt = fmt + "d"
			elif p["type"] == "float":
				fmt = fmt + "f"
			elif p["type"] == "long":
				fmt = fmt + "l"
			elif p["type"] == "char" and not p["value"]:
				fmt = fmt + "s"

			if p == self.head.params[len(self.head.params) -1]:
				pargs = pargs + p["name"]
			else:
				pargs = pargs + p["name"] + ", "

		fmt = fmt + "\", "
		ostr = ostr + fmt + pargs + ");"
		return ostr

	def makejsfunction(self):
		ostr = "function "
		ostr = ostr + self.head.funcname +"("
		pargs = ""
		count = 0
		for p in self.head.params:
			count = count + 1
			if count == 1:
				continue
			if p == self.head.params[len(self.head.params) -1]:
				pargs = pargs + p["name"]
			else:
				pargs = pargs + p["name"] + ", "

		ostr = ostr + pargs + ") {\n"
		return ostr