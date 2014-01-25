#!/usr/bin/env python
"""
This script takes a regular JSON file as input and converts it into a format
expected by a visualization framework

Usage:
  convert_for_vis.py highcharts FILE [options]

Options:
  -h --help  show this help message
  -o FILE    output file [default: out.json]
  --version  show version
"""

__author__ = "Martin Dluhos"
__email__ = "martin@gnu.org"
__version__ = "0.1"

import json
from docopt import docopt


def convert_json_for_highcharts(infile, outfile):
    '''
    Takes a JSON file as input and outputs a file in a format expected by
    highcharts.
    '''

    # Read in the file
    with open(infile, "r") as fp_in:
        data = fp_in.read()
    data_in = json.loads(data)

    # Save in the proper format
    data_out = []

    for activity_name, activity_stats in data_in.items():
        activity_data = {
            "name": activity_name,
            "data": activity_stats.values()
        }
        data_out.append(activity_data)

    # highcharts requires pre-sorting of data
    data_out.sort()
    with open(outfile, "w") as fp_out:
        json.dump(data_out, fp_out, indent=4)


def main():
    arguments = docopt(__doc__, version=__version__)
    infile = arguments['FILE']
    outfile = arguments['-o']

    if arguments['highcharts']:
        convert_json_for_highcharts(infile, outfile)
    elif arguments['infovis']:
        pass

    print "Output file: %s" % outfile

if __name__ == "__main__":
    main()
