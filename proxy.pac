function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "srmdata.com")) {
        return "PROXY 0.0.0.0:0";
    }
    return "DIRECT";
}