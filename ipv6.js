
let mappedAddress = getIpv4MappedIpv6Address(sampleIpv4s[i]);
module.exports.getIpv4MappedIpv6Address = getIpv4MappedIpv6Address;
if( mappedAddress ) {
      console.log(`  IPv4 ${sampleIpv4s[i]} mapped to IPv6 Address: ${mappedAddress}`);
    } else {
      console.error(`  Problem converting IPv4 ${sampleIpv4s[i]} into a mapped IPv6 address.`);
    }
  