set -e

if [ -e .pidfile ]; then
    set -x
    kill "$(cat .pidfile)"
else
    echo ".pidfile não encontrado. Nenhuma ação necessária."
fi