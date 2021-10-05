from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "kujenga_harvester kujenga_timelord_launcher kujenga_timelord kujenga_farmer kujenga_full_node kujenga_wallet".split(),
    "node": "kujenga_full_node".split(),
    "harvester": "kujenga_harvester".split(),
    "farmer": "kujenga_harvester kujenga_farmer kujenga_full_node kujenga_wallet".split(),
    "farmer-no-wallet": "kujenga_harvester kujenga_farmer kujenga_full_node".split(),
    "farmer-only": "kujenga_farmer".split(),
    "timelord": "kujenga_timelord_launcher kujenga_timelord kujenga_full_node".split(),
    "timelord-only": "kujenga_timelord".split(),
    "timelord-launcher-only": "kujenga_timelord_launcher".split(),
    "wallet": "kujenga_wallet kujenga_full_node".split(),
    "wallet-only": "kujenga_wallet".split(),
    "introducer": "kujenga_introducer".split(),
    "simulator": "kujenga_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
