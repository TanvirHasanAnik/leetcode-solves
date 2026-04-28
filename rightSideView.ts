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

function rightSideView(root: TreeNode | null): number[] {
    const res: number[][] = []
    levelOrderRec(root,0,res)
    let result: number[] = []
    for(const level of res){
        result.push(level[level.length - 1]!)
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

console.log(rightSideView(buildTreeBFS([1,2,3,null,5,null,4])))

