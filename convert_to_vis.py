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
import itertools
from docopt import docopt


def convert_json_for_highcharts(infile, outfile):
    '''
    Takes a JSON file as input and outputs a file in a format expected by
    highcharts.
    '''

    # Read in the file
    with open(infile, "r") as fp_in:
        stats = fp_in.read()
    stats_in = json.loads(stats)

    # Save in the proper format
    chart_stats = {
        "categories": [],
        "stats": []
    }

    # highcharts requires pre-sorting of stats
    stats_list = []
    for activity_name in sorted(stats_in, key=stats_in.get):
        chart_stats['categories'].append(activity_name)
        stats_list.append(stats_in[activity_name].values())

    chart_stats['stats'] = list(itertools.chain.from_iterable(stats_list))
    with open(outfile, "w") as fp_out:
        json.dump(chart_stats, fp_out, indent=4)


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

