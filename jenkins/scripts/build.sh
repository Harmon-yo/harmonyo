#!/usr/bin/env sh

serve -s build -l 8001 &
sleep 1
echo $! > .pidfile