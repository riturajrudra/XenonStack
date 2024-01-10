# XenonStack
For technical task 1 and 2

# `Task1 Linux`
## How to run this script
Ensure that the `internsctl` script is executable. If not, make it executable using:
#### `chmod +x internsctl.sh`

### Section A
#### Manual Page:  `./internsctl.sh --help`
#### --help Option: `./internsctl.sh --help`
#### --version Option:  `./internsctl.sh --version`
#
### Section B - Part 1 | Level Easy
#### Get CPU Information:  `./internsctl.sh cpu getinfo`
#### Get Memory Information:  `./internsctl.sh memory getinfo`
#
### Part 2 | Level Intermediate
#### Create a new user:  `./internsctl.sh user create <username>`
#### List all users:  `./internsctl.sh user list`
#### List users with sudo permissions:  `./internsctl.sh user list --sudo-only`

#
### Part 3 | Advanced Level
#### Get file information:  `./internsctl.sh file getinfo <file-name>`
#### Get file size:  `./internsctl.sh file getinfo --size <file-name>`
#### Get file permissions:  `./internsctl.sh file getinfo --permissions <file-name>`
#### Get file owner:  `/internsctl.sh file getinfo --owner <file-name>`
#### Get last modified time:  `./internsctl.sh file getinfo --last-modified <file-name>`
