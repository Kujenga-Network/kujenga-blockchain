import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("KUJENGA_ROOT", "~/.kujenga/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("KUJENGA_KEYS_ROOT", "~/.kujenga_keys"))).resolve()
