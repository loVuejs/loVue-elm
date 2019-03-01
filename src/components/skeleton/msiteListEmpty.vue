<template>
    <div class="skeleton-box">
        <div class="skeleton-bac-animation"></div>
        <div class="skeleton-item">
            <div class="skeleton-item-body skeleton-row" style="margin-bottom: 10px;">
                <skeleton-rect
                    width="30px"
                    height="18px"
                    margin="0 12px 0 0"
                    opacity="0"></skeleton-rect>
                <skeleton-circle
                    diameter="45px"
                    margin="0 12px 0 0"></skeleton-circle>
                <div class="skeleton-info">
                    <skeleton-rect
                        width="60%"
                        height="20px"></skeleton-rect>
                    <skeleton-rect
                        width="40%"
                        height="15px"
                        margin="6px 0 0 0"></skeleton-rect>
                </div>
                <skeleton-rect
                    width="40px"
                    height="20px"
                    margin="0 12px 0 12px"></skeleton-rect>
                <div style="width: 35px;">
                    <skeleton-rect
                        height="20px"></skeleton-rect>
                    <skeleton-rect
                        height="15px"
                        margin="6px 0 0 0"></skeleton-rect>
                </div>
            </div>
        </div>
        <div class="skeleton-item"
            v-for="item in 15" :key="item">
            <div class="skeleton-item-body skeleton-row border-bottom">
                <skeleton-rect
                    width="30px"
                    height="18px"
                    margin="0 12px 0 0"></skeleton-rect>
                <skeleton-circle
                    diameter="45px"
                    margin="0 12px 0 0"></skeleton-circle>
                <div class="skeleton-info">
                    <skeleton-rect
                        width="60%"
                        height="20px"></skeleton-rect>
                </div>
                <skeleton-rect
                    width="40px"
                    height="20px"
                    margin="0 12px 0 12px"></skeleton-rect>
                <div style="width: 35px;">
                    <skeleton-rect
                        height="20px"></skeleton-rect>
                    <skeleton-rect
                        height="15px"
                        margin="6px 0 0 0"></skeleton-rect>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'share-list-empty',
}
</script>

<style lang="stylus" scoped>
@import './../../style/custom.styl'
.skeleton-box
    height: 100%;
    overflow: hidden;
.skeleton-item
    background: #fff;
    .skeleton-item-body
        box-sizing: border-box;
        padding: 15px 0;
        margin: 0 15px;
        .skeleton-info
            flex: auto;
.border-bottom
    border-bottom: 1px solid $borderColor;
</style>
