const widget = new ListWidget ()
widget.addText ("곱씹다")

if (config.runsInApp) {
    await widget.presentSmall()
}

Script.setWidget(widget)
Script.complete ()