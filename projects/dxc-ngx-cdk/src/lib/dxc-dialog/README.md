# DXC Dialog Component

## Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>@Input<br>isVisible: boolean</td>
        <td>true</td>
        <td>If true, the modal should be visible</td>
    </tr>
    <tr>
        <td>@Input<br>isCloseVisible: boolean</td>
        <td>true</td>
        <td>If true, the close button should be visible</td>
    </tr>
    <tr>
        <td>@Output<br>onClose: function</td>
        <td></td>
        <td>This event will be triggered when the user clicks the close button. If there is no function we should close the modal by default</td>
    </tr>
    <tr>
        <td>@Input<br>overlay: boolean</td>
        <td>true</td>
        <td>If true, the modal will be over a darker background</td>
    </tr>
    
</table>

```