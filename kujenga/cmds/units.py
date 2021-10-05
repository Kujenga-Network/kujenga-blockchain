from typing import Dict

# The rest of the codebase uses dogos everywhere.
# Only use these units for user facing interfaces.
units: Dict[str, int] = {
    "kujenga": 10 ** 12,  # 1 kujenga (XKJ) is 1,000,000,000,000 dogo (1 trillion)
    "dogo:": 1,
    "colouredcoin": 10 ** 3,  # 1 coloured coin is 1000 colouredcoin dogos
}
