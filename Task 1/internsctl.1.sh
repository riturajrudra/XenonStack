.TH INTERNSTCTL 1 "10 January 2024" "internsctl 0.1.0" "Xenon commands"

.SH NAME
internsctl \- Custom Linux Command for Operations

.SH SYNOPSIS
.B internsctl
[\fIOPTION\fR]...

.SH DESCRIPTION
.PP
.B internsctl
is a custom Linux command for various system operations.

.SH OPTIONS
.TP
.BR --help
Display help message.

.TP
.BR --version
Display command version.

.TP
.BR cpu getinfo
Get CPU information.

.TP
.BR memory getinfo
Get memory information.

.TP
.BR user create \fI<username>\fR
Create a new user.

.TP
.BR user list
List all regular users.

.TP
.BR user list --sudo-only
List users with sudo permissions.

.TP
.BR file getinfo \fI<file-name>\fR
Get information about a file.

.TP
.BR file getinfo --size
Print file size.

.TP
.BR file getinfo --permissions
Print file permissions.

.TP
.BR file getinfo --owner
Print file owner.

.TP
.BR file getinfo --last-modified
Print last modified time.

.SH EXAMPLES
.PP
\fB./internsctl --help\fR
.PP
\fB./internsctl --version\fR
.PP
\fB./internsctl cpu getinfo\fR
.PP
\fB./internsctl memory getinfo\fR
.PP
\fB./internsctl user create john_doe\fR
.PP
\fB./internsctl user list\fR
.PP
\fB./internsctl user list --sudo-only\fR
.PP
\fB./internsctl file getinfo hello.txt\fR
.PP
\fB./internsctl file getinfo --size hello.txt\fR
.PP
\fB./internsctl file getinfo --permissions hello.txt\fR
.PP
\fB./internsctl file getinfo --owner hello.txt\fR
.PP
\fB./internsctl file getinfo --last-modified hello.txt\fR

.SH SEE ALSO
.BR lscpu (1), \fIfree\fR (1), \fIuseradd\fR (8), \fIgetent\fR (1), \fIgrep\fR (1), \fIstat\fR (1)

.SH AUTHOR
Ritu Raj

.SH BUGS
20bcs5857@cuchd.in
