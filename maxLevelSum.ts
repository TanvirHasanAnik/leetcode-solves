const { buildTreeBFS } = require('./buildBinaryTreeBFS');

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function maxLevelSum(root: TreeNode | null): number {
    const res: number[][] = []
    levelOrderRec(root,0,res)
    let result: number = 0
    let count = 0
    let max = -Infinity
    for(const level of res){
        count++
        let levelSum: number = level.reduce((acc,value) => value + acc,0)
        if(max < levelSum){
            max = levelSum
            result = count
        }

    }
    return result
};

function levelOrderRec(root: TreeNode | null, level:number, res: number[][]) {
    if (root === null) return;

    if (res.length <= level)
        res.push([]);

    res[level]!.push(root.val);

    levelOrderRec(root.left, level + 1, res);
    levelOrderRec(root.right, level + 1, res);
}

console.log(maxLevelSum(buildTreeBFS([1,7,0,7,-8,null,null])))

