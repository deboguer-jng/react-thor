import web3 from 'web3';

export const validateCSV = (data, decimal) => {
  let validCSVError = '';
  const header = data[0].split(',');
  let _totalAmount = 0;
  let endNull = 0;

  if (data && data.length >= 3) {
    if (data[data.length - 1] === '') {
      endNull = +1;
    }
  }

  if (header.length === 2 && header[0].trim() === 'address' && header[1].trim() === 'amount') {
    if (data.length >= 3 + endNull) {
      for (let i = 1; i < data.length; i++) {
        if (data[i] !== '') {
          const rowData = data[i].split(',');
          if (
            web3.utils.isAddress(rowData[0].trim()) &&
            !isNaN(rowData[1].trim()) &&
            rowData[1].trim() !== '' &&
            Number(rowData[1].trim()) > 0
          ) {
            const splitedData = rowData[1].split('.');
            if (splitedData.length === 2 && splitedData[1].length > decimal) {
              validCSVError = 'Invalid number of decimals';
              break;
            }

            if (rowData[1].indexOf('e') !== -1 || rowData[1].indexOf('E') !== -1) {
              validCSVError = 'Amount cannot be in exponentail';
              break;
            }

            _totalAmount += Number(rowData[1]);
          } else {
            validCSVError = 'Invalid CSV';
            break;
          }
        } else {
          endNull += 1;
        }
      }
    } else {
      validCSVError = 'Atleast 2 entries are required in csv';
    }
  } else {
    validCSVError = 'Invalid CSV';
  }
  return { validCSVError, _totalAmount, _totalAddress: data.length - endNull };
};

export const removeDuplicateAddress = (file, decimal) => {
  let duplicateIds = file
    .map(e => e['address'])
    .map((e, i, final) => final.indexOf(e) !== i && i)
    .filter(obj => file[obj])
    .map(e => file[e]);
  let unique = file
    .map(e => e['address'])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(obj => file[obj])
    .map(e => file[e]);
  for (var key in duplicateIds) {
    unique.filter(item => {
      if (item.address == duplicateIds[key].address) {
        item.amount = (Number(item.amount) + Number(duplicateIds[key].amount)).toString();
      }
    });
  }
  unique = unique.map(({ address, amount }) => ({
    address: address.toLowerCase(),
    amount: toFixed(amount, decimal),
  }));
  return unique;
};

export const toFixed = (num, decimal) => {
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + decimal + '})?');
  return num.toString().match(re)[0];
};
