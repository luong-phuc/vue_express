#!/usr/bin/env python
from fabric.api import *

env.hosts = ['mulodo@192.168.100.86']

def start():
    push_source()
    f=''
    m=''
    all=False

    is_run_test = input('Would you like to run test (yes/no) ? ')
    if(is_run_test == 'no'):
        return

    all_input = input('Would you like to run test all (yes/no) ? ')
    if(all == 'yes'):
        all = True
    else:
        f = input('File : ')
        m = input('Method : ')

    run_test(f,m,all)

def push_source():
    print('Push source from local to Tram Server.')
    local('sh push_tram_server.sh')
    code_dir = '/Users/mulodo/Documents/Hamee/dev-environment/phuc_core'
    with cd(code_dir):
        with settings(
            hide('warnings', 'running', 'stdout', 'stderr'),
            warn_only=True
        ):
            output = run("git diff --name-only")

        print("Files changes :")    
        print(output)

def run_test(f='',m='',all=False):
    code_dir = '/Users/mulodo/Documents/Hamee/dev-environment/phuc_core'
    query = 'ut exec '
    is_run = False

    with cd(code_dir):
        if(all):
            print("run all")
            run(query + 'all')
            return

        if(len(f) > 0):
            is_run = True
            query += "-f %s " % f

        if(len(m) > 0):
            is_run = True
            query += "-t %s " % m     

        if(is_run):
            print("run with file : %s ; method : %s" % (f,m))
            run(query)
        else:
            print("No run test.")
    
    return

def status():
    code_dir = '/Users/mulodo/Documents/Hamee/dev-environment/phuc_core'
    with cd(code_dir):
        run('git status -s')      

def help():
    print("1. If you want run test")    
    print("fab start \n")    
    print("2. If you want view status git")    
    print("fab status")    