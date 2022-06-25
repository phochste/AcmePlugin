<script>
    let options = [];
    let resource = "{resource}";

    updateOptions();

    function onSubmit(e) {
        console.log('adding...');
        console.log(e);
        const formData = new FormData(e.target);
        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        if (options.length == 0) {
            console.log("adding one %O", data);
            let item = {};
            item[ data['key'] ] = data['url'];
            console.log("adding one %O", item);
            chrome.storage.sync.set(item, () => {
                console.log('done');
                updateOptions();
            });
        }
        else {
            chrome.storage.sync.get(null, (items) => {
                items[ data['key'] ] = data['url'];
                console.log("adding to existing %O", items);
                chrome.storage.sync.set(items, () => {
                    console.log('done');
                    updateOptions();
                });
            });
        }

        e.target.reset();
    }

    function onDelete(key) {
        console.log(`deleting ${key}`);
        chrome.storage.sync.remove(key,() => {
            console.log('done');
            updateOptions();
        });
    }

    function updateOptions() {
        chrome.storage.sync.get(null, (items) => {
            let allKeys = Object.keys(items);
            options = [];
            allKeys.forEach( key => {
                options.push({
                    key: key,
                    url: items[key]
                });
            });
            options = options;
            console.log("options: %O", options);
        });
    }
</script>

<main>

<h1>AcmePlugin Options</h1>

<p>
    <b>Total:</b>
    {options.length} settings
</p>

<dl>
    {#each options as opt}
        <dt><b>{opt.key}</b></dt>
        <dd>
        <input type="text" value={opt.url} size="80"/>
        <button on:click={() => onDelete(opt.key)}>Delete</button>
        </dd>
    {/each}
</dl>

<b>Add a context menu item</b>
<form on:submit|preventDefault={onSubmit}>
   <div>
      <label for="key">Name</label>
      <input type="text" name="key"/>
   </div>
   <div>
      <label for="url">Url</label>
      <input type="text" name="url" size="60"/>
   </div>
   <button type="submit">Add</button>
</form>

<hr/>

<p>
Add context menu items to your AcmePlugin. The <b>Name</b> should be
a title for a menu item such as <i>Open...</i>, <i>Edit...</i>. The
<b>Url</b> should point to an application you wan to open. Use 
the <tt>{resource}</tt> template to fill in the current
link, image, page URL that is in context.
</p>

Some examples:
<ul>
    <li><b>Open...</b> https://otto-aa.github.io/solid-filemanager/?url={resource}</li>
    <li><b>Edit...</b> https://solideditor.patrickhochstenbach.net/?resource={resource}</li>
    <li><b>Permissions...</b> https://waceditor.patrickhochstenbach.net/?resource={resource}</li>
</ul>

</main>

<style>
</style>