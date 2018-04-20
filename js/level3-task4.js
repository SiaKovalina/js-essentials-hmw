var arr = [9, 9, 111, 111, 111, 2, 3, 4, 111, 4, 5, 7];
        var sortedArr = arr.sort(); 
        var results = [];
        for (var i = 0; i < arr.length - 1; i++) {
            if (sortedArr[i] == sortedArr[i + 1] && sortedArr.indexOf(i) == -1 && sortedArr.indexOf(i + 1) == -1) {
                results.push(sortedArr[i]);
            }
        }

        console.log(results);