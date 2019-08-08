import json


class PlayGround:

    """ reports the numbers of time a 1 got repeated consecutively """
    def findOccurrance(self):
        number = input('Enter a string of 1s and 0s \n ')
        if not number:
            print('a string of 1s and 0s is required')
            return self.findOccurrance()

        last_num = None
        numbers = list(number)
        count = 0
        counted = False

        for num in numbers:
            num = int(num)
            if num > 1:
                print('a string of 1s and 0s is required2')
                return self.findOccurrance()
            if not counted and last_num == 1 and num == 1:
                count+=1
                counted = True
            elif last_num == 0:
                counted = False
            
            last_num = num

        return count


    """reverses all strings and retains numbers in its position"""
    def reverseAndretain(self):
        _str = input('please enter a string containing integer in it \n ')
        if not _str:
            print('a string containing integer in it is required')
            return self.reverseAndretain()
        strs = list(_str)
        newStr = []
        numIndex = []

        for i in range(len(strs)):
            if strs[i].isdigit():
                numIndex.append({
                    'index': i,
                    'value': strs[i]
                })
            else:
                newStr.append(strs[i])

        newStr = newStr[::-1]

        for nIndex in numIndex:
            newStr.insert(nIndex['index'], nIndex['value'])

        return ''.join(newStr)

    
    """finds the zero value in a multidimemnsional array and replaces it row s and col wihth 0s"""
    def replaceArray(self):

        arr = json.loads(input('please enter a multidimensional array \n '))
        if not arr:
            print('a multidimensional array is required1')
            return self.replaceArray()
            
        zoroIndex = {}

        # search for 0 and save it indexes
        for x in range(len(arr)):
            if type(arr[x]) is not list:
                print('a multidimensional array is required3')
                return self.replaceArray()
            for y in range(len(arr[x])):
                if arr[x][y] is 0:
                    zoroIndex = {
                        'x': x,
                        'y': y
                    }
        
        newarr = [[0]*len(arr) for i in range(len(arr[0]))] #[[0 for x in range(len(arr))] for y in range(len(arr[0]))] 
        # user the indexes to convert every values in the same row and colomn 0 appeared in
        for x in range(len(arr)):
            if type(arr[x]) is list:
                for y in range(len(arr[x])):
                    if y is zoroIndex['y'] or x is zoroIndex['x']:
                        newarr[x][y] = 0
                    else:
                        newarr[x][y] = arr[x][y]
        return newarr


    """checks if string value when reversed remains the same as the string itself"""
    def isPalindrome(self):
        _str = input('please enter a word \n ')
        if not _str:
            print('a word required')
            return self.isPalindrome()
        _str = list(_str)[::-1]
        rStr = ''.join(_str)

        if rStr is _str:
            return True
        
        return False




def __init():
    __method_to_run = int(input('select one of the methods to run \n 1 - find occurance \n 2 - reverse and retain int \n 3 - replace zeros \n 4 - palindrome \n '))
    print("you selected " + str(__method_to_run))

    if __method_to_run == 1:
        res = PlayGround().findOccurrance()
    elif __method_to_run == 2:
        res = PlayGround().reverseAndretain()
    elif __method_to_run == 3:
        res = PlayGround().replaceArray()
    elif __method_to_run == 4:
        res = PlayGround().isPalindrome()
    else:
        print('Your selection is invalid! \n')
        return __init()
    print(res)


if __name__ == "__main__":
    __init()
        